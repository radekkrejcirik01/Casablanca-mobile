import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';
import { ProfileStackNavigatorEnum } from '@navigation/StackNavigators/profile/ProfileStackNavigator.enum';
import { NavigationScreenHeader } from '@navigation/StackNavigators/StackNavigator.options';
import { DistancePreferenceScreen } from '@screens/profile/settings/DistancePreferenceScreen/DistancePreferenceScreen';
import {
    AboutTitle,
    AccountTitle,
    AgePreferenceOptions,
    ChangePasswordTitle,
    CommunityRulesTitle,
    DeleteAccountTitle,
    DistancePreferenceOptions,
    HelpCenterTitle,
    ShowMeOptions
} from '@navigation/StackNavigators/profile/ProfileStackNavigator.options';
import { AboutScreen } from '@screens/profile/settings/AboutScreen/AboutScreen';
import { HelpCenterScreen } from '@screens/profile/settings/HelpCenterScreen/HelpCenterScreen';
import { CommunityRulesScreen } from '@screens/profile/settings/CommunityRulesScreen/CommunityRulesScreen';
import { AccountScreen } from '@screens/profile/settings/AccountScreen/AccountScreen';
import { ChangePasswordScreen } from '@screens/profile/settings/ChangePasswordScreen/ChangePasswordScreen';
import { DeleteAccountScreen } from '@screens/profile/settings/DeleteAccountScreen/DeleteAccountScreen';
import { ShowMeScreen } from '@screens/profile/settings/ShowMeScreen/ShowMeScreen';
import { AgePreferenceScreen } from '@screens/profile/settings/AgePreferenceScreen/AgePreferenceScreen';

const Profile = createStackNavigator<ParamListBase>();

export const ProfileStackNavigator = (): JSX.Element => (
    <Profile.Navigator>
        <Profile.Screen
            name={ProfileStackNavigatorEnum.AboutScreen}
            component={AboutScreen}
            options={{ ...NavigationScreenHeader, ...AboutTitle }}
        />
        <Profile.Screen
            name={ProfileStackNavigatorEnum.DistancePreferenceScreen}
            component={DistancePreferenceScreen}
            options={{
                ...NavigationScreenHeader,
                ...DistancePreferenceOptions
            }}
        />
        <Profile.Screen
            name={ProfileStackNavigatorEnum.AgePreferenceScreen}
            component={AgePreferenceScreen}
            options={{
                ...NavigationScreenHeader,
                ...AgePreferenceOptions
            }}
        />
        <Profile.Screen
            name={ProfileStackNavigatorEnum.ShowMeScreen}
            component={ShowMeScreen}
            options={{ ...NavigationScreenHeader, ...ShowMeOptions }}
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
