import React, { useCallback } from 'react';
import { Linking, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { SettingsListItem } from '@components/settings/SettingsListItem/SettingsListItem';
import { SettingsListStyle } from '@components/settings/SettingsList/SettingsList.style';
import { useNavigation } from '@hooks/useNavigation';
import { ProfileStackNavigatorEnum } from '@navigation/StackNavigators/profile/ProfileStackNavigator.enum';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { resetUserState } from '@store/UserReducer';
import { PersistStorageKeys } from '@utils/PersistStorage/PersistStorage.enum';
import { PersistStorage } from '@utils/PersistStorage/PersistStorage';
import { setIsDarkMode } from '@store/ThemeReducer';
import { useTheme } from '@hooks/useTheme';

export const SettingsList = (): JSX.Element => {
    const { isDarkMode } = useTheme();

    const dispatch = useDispatch();

    const { navigateTo } = useNavigation(RootStackNavigatorEnum.ProfileStack);

    const openAboutScreen = () => {
        navigateTo(ProfileStackNavigatorEnum.AboutScreen);
    };

    const toggleSwitch = (value: boolean) => {
        console.log(JSON.stringify(value));
    };

    const openDistanceScreen = () => {
        navigateTo(ProfileStackNavigatorEnum.DistanceScreen);
    };

    const openShowMeScreen = () => {
        navigateTo(ProfileStackNavigatorEnum.ShowMeScreen);
    };

    const openHelpCenterScreen = () => {
        navigateTo(ProfileStackNavigatorEnum.HelpCenterScreen);
    };

    const openCommunityRulesScreen = () => {
        navigateTo(ProfileStackNavigatorEnum.CommunityRulesScreen);
    };

    const openPrivacyPolicyScreen = () => {
        Linking.openURL(
            'https://www.termsfeed.com/live/c0485039-5d23-4ad7-a4b9-0970911f8ec1'
        );
    };

    const openAccountScreen = () => {
        navigateTo(ProfileStackNavigatorEnum.AccountScreen);
    };

    const toggleDarkMode = useCallback(
        (value: boolean) => {
            dispatch(setIsDarkMode(value));

            const mode = value ? 'dark' : 'light';
            PersistStorage.setItem(PersistStorageKeys.THEME, mode).catch();
        },
        [dispatch]
    );

    const LogOut = useCallback(() => {
        dispatch(resetUserState());
        PersistStorage.setItem(PersistStorageKeys.TOKEN, '').catch();
    }, [dispatch]);

    return (
        <View style={SettingsListStyle.container}>
            <SettingsListItem
                title="About Casablanca"
                hasArrow
                onPress={openAboutScreen}
            />
            <SettingsListItem
                title="Push notification"
                hasSwitch
                toggleSwitch={toggleSwitch}
            />
            <SettingsListItem
                title="Distance"
                description="100km"
                hasArrow
                onPress={openDistanceScreen}
            />
            <SettingsListItem
                title="Show me"
                description="Women"
                hasArrow
                onPress={openShowMeScreen}
            />
            <SettingsListItem
                title="Help center"
                hasArrow
                onPress={openHelpCenterScreen}
            />
            <SettingsListItem
                title="Community rules"
                hasArrow
                onPress={openCommunityRulesScreen}
            />
            <SettingsListItem
                title="Privacy policy"
                hasArrow
                onPress={openPrivacyPolicyScreen}
            />
            <SettingsListItem
                title="Account"
                hasArrow
                onPress={openAccountScreen}
            />
            <SettingsListItem
                title="Dark mode"
                hasSwitch
                switchTrue={isDarkMode}
                toggleSwitch={toggleDarkMode}
            />
            <SettingsListItem
                title="Log Out"
                onPress={LogOut}
                style={SettingsListStyle.lastItem}
            />
        </View>
    );
};
