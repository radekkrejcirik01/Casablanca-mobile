import React from 'react';
import { ScrollView } from 'react-native';
import { SettingsListItem } from '@components/settings/SettingsListItem/SettingsListItem';
import { SettingsListStyle } from '@components/settings/SettingsList/SettingsList.style';
import { useNavigation } from '@hooks/useNavigation';
import { ProfileStackNavigatorEnum } from '@navigation/StackNavigators/profile/ProfileStackNavigator.enum';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';

export const SettingsList = (): JSX.Element => {
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

    const openHelpCenterScreen = () => {
        navigateTo(ProfileStackNavigatorEnum.HelpCenterScreen);
    };

    const openCommunityRulesScreen = () => {
        navigateTo(ProfileStackNavigatorEnum.CommunityRulesScreen);
    };

    const openPrivacyPolicyScreen = () => {
        navigateTo(ProfileStackNavigatorEnum.PrivacyPolicyScreen);
    };

    const openAccountScreen = () => {
        navigateTo(ProfileStackNavigatorEnum.AccountScreen);
    };

    const LogOut = () => {};

    return (
        <ScrollView style={SettingsListStyle.container}>
            <SettingsListItem
                title="About Casablanca"
                description="Description"
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
                title="Log Out"
                hasArrow
                onPress={LogOut}
                style={SettingsListStyle.lastItem}
            />
        </ScrollView>
    );
};
