import { useDispatch, useSelector } from 'react-redux';
import { ReducerProps } from '@store/index.props';
import { useCallback, useMemo } from 'react';
import { updateRequest } from '@utils/Axios/Axios.service';
import {
    FilterByTagsInterface,
    NotificationsInterface,
    ResponseInterface
} from '@models/Registration/Registration.interface';
import {
    setFilterByTagsAction,
    setNotificationsAction
} from '@store/UserReducer';
import { ProfileStackNavigatorEnum } from '@navigation/StackNavigators/profile/ProfileStackNavigator.enum';
import { useNavigation } from '@hooks/useNavigation';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { ShowMeSelectEnum } from '@components/registration/ShowMeSelect/ShowMeSelect.enum';

export const useSettings = (): {
    switchNotificationsValue: boolean;
    toggleNotification: (value: boolean) => void;
    distancePreferenceDescription: string;
    openDistancePreferenceScreen: () => void;
    agePreferenceDescription: string;
    openAgePreferenceScreen: () => void;
    switchTagsValue: boolean;
    toggleTags: (value: boolean) => void;
    showMeDescription: ShowMeSelectEnum;
    openShowMeScreen: () => void;
} => {
    const {
        agePreference,
        distancePreference,
        email,
        filterByTags,
        notifications,
        showMe
    } = useSelector((state: ReducerProps) => state.user);
    const dispatch = useDispatch();

    const { navigateTo } = useNavigation(RootStackNavigatorEnum.ProfileStack);

    const switchNotificationsValue = useMemo(
        (): boolean => !!notifications,
        [notifications]
    );

    const toggleNotification = useCallback(
        (value: boolean) => {
            const notificationsValue = value ? 1 : 0;
            updateRequest<ResponseInterface, NotificationsInterface>(
                'user/notifications/update',
                {
                    email,
                    notifications: notificationsValue
                }
            ).subscribe();

            dispatch(setNotificationsAction(notificationsValue));
        },
        [dispatch, email]
    );

    const distancePreferenceDescription = useMemo(
        (): string => `${distancePreference?.toString()} km`,
        [distancePreference]
    );

    const openDistancePreferenceScreen = useCallback(() => {
        navigateTo(ProfileStackNavigatorEnum.DistancePreferenceScreen);
    }, [navigateTo]);

    const agePreferenceDescription = useMemo(
        (): string => agePreference?.toString(),
        [agePreference]
    );

    const openAgePreferenceScreen = useCallback(() => {
        navigateTo(ProfileStackNavigatorEnum.AgePreferenceScreen);
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

    return {
        switchNotificationsValue,
        toggleNotification,
        distancePreferenceDescription,
        openDistancePreferenceScreen,
        agePreferenceDescription,
        openAgePreferenceScreen,
        switchTagsValue,
        toggleTags,
        showMeDescription,
        openShowMeScreen
    };
};
