import React from 'react';
import { ScrollView } from 'react-native';
import { ListItem } from '@components/general/ListItem/ListItem';
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
        <ScrollView style={AccountScreenStyle.container}>
            <ListItem
                title="Change password"
                hasArrow
                onPress={openChangePassword}
            />
            <ListItem
                title="Delete account"
                hasArrow
                onPress={openDeleteAccount}
            />
        </ScrollView>
    );
};
