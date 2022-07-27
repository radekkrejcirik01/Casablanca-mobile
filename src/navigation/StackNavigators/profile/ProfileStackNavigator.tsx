import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';
import { ProfileStackNavigatorEnum } from '@navigation/StackNavigators/profile/ProfileStackNavigator.enum';
import { SettingsScreen } from '@screens/settings/SettigsScreen/SettingsScreen';
import { NavigationScreenHeader } from '@navigation/StackNavigators/StackNavigator.options';
import { DistanceScreen } from '@screens/settings/DistanceScreen/DistanceScreeen';
import {
    AboutTitle,
    AccountTitle,
    ChangePasswordTitle,
    CommunityRulesTitle,
    DeleteAccountTitle,
    DistanceTitle,
    HelpCenterTitle,
    SettingsTitle
} from '@navigation/StackNavigators/profile/ProfileStackNavigator.options';
import { AboutScreen } from '@screens/settings/AboutScreen/AboutScreen';
import { HelpCenterScreen } from '@screens/settings/HelpCenterScreen/HelpCenterScreen';
import { CommunityRulesScreen } from '@screens/settings/CommunityRulesScreen/CommunityRulesScreen';
import { AccountScreen } from '@screens/settings/AccountScreen/AccountScreen';
import { ChangePasswordScreen } from '@screens/settings/ChangePasswordScreen/ChangePasswordScreen';
import { DeleteAccountScreen } from '@screens/settings/DeleteAccountScreen/DeleteAccountScreen';

const Profile = createStackNavigator<ParamListBase>();

export const ProfileStackNavigator = (): JSX.Element => (
    <Profile.Navigator>
        <Profile.Screen
            name={ProfileStackNavigatorEnum.SettingsScreen}
            component={SettingsScreen}
            options={{ ...NavigationScreenHeader, ...SettingsTitle }}
        />
        <Profile.Screen
            name={ProfileStackNavigatorEnum.AboutScreen}
            component={AboutScreen}
            options={{ ...NavigationScreenHeader, ...AboutTitle }}
        />
        <Profile.Screen
            name={ProfileStackNavigatorEnum.DistanceScreen}
            component={DistanceScreen}
            options={{ ...NavigationScreenHeader, ...DistanceTitle }}
        />
        <Profile.Screen
            name={ProfileStackNavigatorEnum.HelpCenterScreen}
            component={HelpCenterScreen}
            options={{ ...NavigationScreenHeader, ...HelpCenterTitle }}
        />
        <Profile.Screen
            name={ProfileStackNavigatorEnum.CommunityRulesScreen}
            component={CommunityRulesScreen}
            options={{ ...NavigationScreenHeader, ...CommunityRulesTitle }}
        />
        <Profile.Screen
            name={ProfileStackNavigatorEnum.AccountScreen}
            component={AccountScreen}
            options={{ ...NavigationScreenHeader, ...AccountTitle }}
        />
        <Profile.Screen
            name={ProfileStackNavigatorEnum.ChangePasswordScreen}
            component={ChangePasswordScreen}
            options={{ ...NavigationScreenHeader, ...ChangePasswordTitle }}
        />
        <Profile.Screen
            name={ProfileStackNavigatorEnum.DeleteAccountScreen}
            component={DeleteAccountScreen}
            options={{ ...NavigationScreenHeader, ...DeleteAccountTitle }}
        />
    </Profile.Navigator>
);
