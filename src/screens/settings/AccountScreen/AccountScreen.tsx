import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SettingsListItem } from '@components/settings/SettingsListItem/SettingsListItem';
import { AccountScreenStyle } from '@screens/settings/AccountScreen/AccountScreen.style';
import { useNavigation } from '@hooks/useNavigation';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { ProfileStackNavigatorEnum } from '@navigation/StackNavigators/profile/ProfileStackNavigator.enum';

export const AccountScreen = (): JSX.Element => {
    const { navigateTo } = useNavigation(RootStackNavigatorEnum.ProfileStack);

    const openChangePassword = () => {
        navigateTo(ProfileStackNavigatorEnum.ChangePasswordScreen);
    };

    const openDeleteAccount = () => {
        navigateTo(ProfileStackNavigatorEnum.DeleteAccountScreen);
    };

    return (
        <SafeAreaProvider>
            <SettingsListItem
                title="Change password"
                hasArrow
                onPress={openChangePassword}
                style={[
                    AccountScreenStyle.changePassword,
                    AccountScreenStyle.border
                ]}
            />
            <SettingsListItem
                title="Delete account"
                hasArrow
                onPress={openDeleteAccount}
                style={[
                    AccountScreenStyle.deleteAccount,
                    AccountScreenStyle.border
                ]}
            />
        </SafeAreaProvider>
    );
};
