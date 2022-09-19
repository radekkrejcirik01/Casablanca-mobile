import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SettingsListItem } from '@components/settings/SettingsListItem/SettingsListItem';
import { useNavigation } from '@hooks/useNavigation';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { ProfileStackNavigatorEnum } from '@navigation/StackNavigators/profile/ProfileStackNavigator.enum';
import { AccountScreenStyle } from '@screens/profile/settings/AccountScreen/AccountScreen.style';

export const AccountScreen = (): JSX.Element => {
    const { navigateTo } = useNavigation(RootStackNavigatorEnum.ProfileStack);

    const openChangePassword = () => {
        navigateTo(ProfileStackNavigatorEnum.ChangePasswordScreen);
    };

    const openDeleteAccount = () => {
        navigateTo(ProfileStackNavigatorEnum.DeleteAccountScreen);
    };

    return (
        <SafeAreaProvider style={AccountScreenStyle.container}>
            <SettingsListItem
                title="Change password"
                hasArrow
                onPress={openChangePassword}
            />
            <SettingsListItem
                title="Delete account"
                hasArrow
                onPress={openDeleteAccount}
            />
        </SafeAreaProvider>
    );
};
