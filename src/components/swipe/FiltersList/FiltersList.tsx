import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListItem } from '@components/general/ListItem/ListItem';
import { useNavigation } from '@hooks/useNavigation';
import { ProfileStackNavigatorEnum } from '@navigation/StackNavigators/profile/ProfileStackNavigator.enum';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { ReducerProps } from '@store/index.props';
import { setFilterByTagsAction } from '@store/UserReducer';

export const FiltersList = (): JSX.Element => {
    const { showMe, distance, filterByTags } = useSelector(
        (state: ReducerProps) => state.user
    );
    const dispatch = useDispatch();

    const { navigateTo } = useNavigation(RootStackNavigatorEnum.ProfileStack);

    const distanceDescription = useMemo(
        () => `${distance?.toString()} km`,
        [distance]
    );

    const openDistanceScreen = useCallback(() => {
        navigateTo(ProfileStackNavigatorEnum.DistanceScreen);
    }, [navigateTo]);

    const openShowMeScreen = useCallback(() => {
        navigateTo(ProfileStackNavigatorEnum.ShowMeScreen);
    }, [navigateTo]);

    const toggleTags = useCallback(
        (value: boolean) => {
            dispatch(setFilterByTagsAction(value));
        },
        [dispatch]
    );

    return (
        <>
            <ListItem
                title="Distance"
                description={distanceDescription}
                hasArrow
                onPress={openDistanceScreen}
            />
            <ListItem
                title="Show me"
                description={showMe}
                hasArrow
                onPress={openShowMeScreen}
            />
            <ListItem
                title="Filter by tags"
                hasSwitch
                switchValue={filterByTags}
                toggleSwitch={toggleTags}
            />
        </>
    );
};
