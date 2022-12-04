import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListItem } from '@components/general/ListItem/ListItem';
import { useNavigation } from '@hooks/useNavigation';
import { ProfileStackNavigatorEnum } from '@navigation/StackNavigators/profile/ProfileStackNavigator.enum';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { ReducerProps } from '@store/index.props';
import { setFilterByTagsAction } from '@store/UserReducer';
import { ShowMeSelectEnum } from '@components/registration/ShowMeSelect/ShowMeSelect.enum';
import { updateRequest } from '@utils/Axios/Axios.service';
import {
    FilterByTagsInterface,
    ResponseInterface
} from '@models/Registration/Registration.interface';

export const FiltersList = (): JSX.Element => {
    const { agePreference, distancePreference, email, filterByTags, showMe } =
        useSelector((state: ReducerProps) => state.user);
    const dispatch = useDispatch();

    const { navigateTo } = useNavigation(RootStackNavigatorEnum.ProfileStack);

    const distancePreferenceDescription = useMemo(
        () => `${distancePreference?.toString()} km`,
        [distancePreference]
    );

    const openDistancePreferenceScreen = useCallback(() => {
        navigateTo(ProfileStackNavigatorEnum.DistancePreferenceScreen);
    }, [navigateTo]);

    const agePreferenceDescription = useMemo(
        () => agePreference?.toString(),
        [agePreference]
    );

    const openAgePreferenceScreen = useCallback(() => {
        navigateTo(ProfileStackNavigatorEnum.AgePreferenceScreen);
    }, [navigateTo]);

    const showMeDescription = useMemo((): ShowMeSelectEnum => {
        if (showMe === 0) {
            return ShowMeSelectEnum.MEN;
        }
        if (showMe === 1) {
            return ShowMeSelectEnum.WOMEN;
        }
        return ShowMeSelectEnum.ALL;
    }, [showMe]);

    const openShowMeScreen = useCallback(() => {
        navigateTo(ProfileStackNavigatorEnum.ShowMeScreen);
    }, [navigateTo]);

    const switchTagsValue = useMemo(
        (): boolean => !!filterByTags,
        [filterByTags]
    );

    const toggleTags = useCallback(
        (value: boolean) => {
            const filterByTagsValue = value ? 1 : 0;
            updateRequest<ResponseInterface, FilterByTagsInterface>(
                'user/filterByTags/update',
                {
                    email,
                    filterByTags: filterByTagsValue
                }
            ).subscribe();

            dispatch(setFilterByTagsAction(filterByTagsValue));
        },
        [dispatch, email]
    );

    return (
        <>
            <ListItem
                title="Distance preference"
                description={distancePreferenceDescription}
                hasArrow
                onPress={openDistancePreferenceScreen}
            />
            <ListItem
                title="Age preference"
                description={agePreferenceDescription}
                hasArrow
                onPress={openAgePreferenceScreen}
            />
            <ListItem
                title="Show me"
                description={showMeDescription}
                hasArrow
                onPress={openShowMeScreen}
            />
            <ListItem
                title="Filter by tags"
                hasSwitch
                switchValue={switchTagsValue}
                toggleSwitch={toggleTags}
            />
        </>
    );
};
