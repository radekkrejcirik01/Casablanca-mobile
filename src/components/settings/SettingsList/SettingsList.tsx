import React, { useCallback } from 'react';
import { Linking, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ListItem } from '@components/general/ListItem/ListItem';
import { SettingsListStyle } from '@components/settings/SettingsList/SettingsList.style';
import { useNavigation } from '@hooks/useNavigation';
import { ProfileStackNavigatorEnum } from '@navigation/StackNavigators/profile/ProfileStackNavigator.enum';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { resetUserState } from '@store/UserReducer';
import { resetBottomBarVisibleState } from '@store/BottomBarReducer';
import { PersistStorageKeys } from '@utils/PersistStorage/PersistStorage.enum';
import { PersistStorage } from '@utils/PersistStorage/PersistStorage';
import { setIsDarkMode } from '@store/ThemeReducer';
import { useTheme } from '@hooks/useTheme';
import THEMES from '@constants/THEMES';
import {
    SettingsListDefaultProps,
    SettingsListProps
} from '@components/settings/SettingsList/SettingsList.props';
import { useSettings } from '@hooks/useSettings';
import { postRequest } from '@utils/Axios/Axios.service';
import {
    DeleteDeviceInterface,
    ResponseInterface
} from '@models/Registration/Registration.interface';
import { setDeviceTokenAction } from '@store/DeviceReducer';
import { ReducerProps } from '@store/index.props';

export const SettingsList = ({ style }: SettingsListProps): JSX.Element => {
    const { email } = useSelector((state: ReducerProps) => state.user);
    const { token } = useSelector((state: ReducerProps) => state.device);
    const dispatch = useDispatch();

    const { isDarkMode } = useTheme();
    const { navigateTo } = useNavigation(RootStackNavigatorEnum.ProfileStack);
    const {
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
    } = useSettings();

    const openAboutScreen = useCallback(() => {
        navigateTo(ProfileStackNavigatorEnum.AboutScreen);
    }, [navigateTo]);

    const openHelpCenterScreen = useCallback(() => {
        navigateTo(ProfileStackNavigatorEnum.HelpCenterScreen);
    }, [navigateTo]);

    const openCommunityRulesScreen = useCallback(() => {
        navigateTo(ProfileStackNavigatorEnum.CommunityRulesScreen);
    }, [navigateTo]);

    const openPrivacyPolicyScreen = () => {
        Linking.openURL(
            'https://www.termsfeed.com/live/c0485039-5d23-4ad7-a4b9-0970911f8ec1'
        ).catch();
    };

    const openAccountScreen = useCallback(() => {
        navigateTo(ProfileStackNavigatorEnum.AccountScreen);
    }, [navigateTo]);

    const toggleDarkMode = useCallback(
        (value: boolean) => {
            dispatch(setIsDarkMode(value));

            const mode = value ? THEMES.DARK : THEMES.LIGHT;
            PersistStorage.setItem(PersistStorageKeys.THEME, mode).catch();
        },
        [dispatch]
    );

    const deleteDevice = useCallback(() => {
        postRequest<ResponseInterface, DeleteDeviceInterface>(
            'https://43bblrwkdc.execute-api.eu-central-1.amazonaws.com/pushnotifications/deleteDevice',
            {
                email,
                deviceToken: token
            }
        ).subscribe((response: ResponseInterface) => {
            if (response?.status) {
                dispatch(setDeviceTokenAction(null));
            }
        });
    }, [dispatch, email, token]);

    const LogOut = useCallback(() => {
        dispatch(resetUserState());
        setTimeout(() => {
            dispatch(resetBottomBarVisibleState());
        }, 1000);
        PersistStorage.setItem(PersistStorageKeys.TOKEN, '').catch();
        deleteDevice();
    }, [deleteDevice, dispatch]);

    return (
        <View style={style}>
            <ListItem
                title="About Casablanca"
                hasArrow
                onPress={openAboutScreen}
            />
            <ListItem
                title="Receive notification"
                switchValue={switchNotificationsValue}
                hasSwitch
                toggleSwitch={toggleNotification}
            />
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
                title="Filter by tags"
                hasSwitch
                switchValue={switchTagsValue}
                toggleSwitch={toggleTags}
            />
            <ListItem
                title="Show me"
                description={showMeDescription}
                hasArrow
                onPress={openShowMeScreen}
            />
            <ListItem
                title="Help center"
                hasArrow
                onPress={openHelpCenterScreen}
            />
            <ListItem
                title="Community rules"
                hasArrow
                onPress={openCommunityRulesScreen}
            />
            <ListItem
                title="Privacy policy"
                hasArrow
                onPress={openPrivacyPolicyScreen}
            />
            <ListItem title="Account" hasArrow onPress={openAccountScreen} />
            <ListItem
                title="Dark mode"
                hasSwitch
                switchValue={isDarkMode}
                toggleSwitch={toggleDarkMode}
            />
            <ListItem
                title="Log Out"
                onPress={LogOut}
                style={SettingsListStyle.lastItem}
            />
        </View>
    );
};

SettingsList.defaultProps = SettingsListDefaultProps;
