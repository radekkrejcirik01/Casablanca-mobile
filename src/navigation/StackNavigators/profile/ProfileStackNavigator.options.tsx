import React from 'react';
import { StackNavigationOptions } from '@react-navigation/stack';
import { HeaderSave } from '@components/general/HeaderSave/HeaderSave';
import { StackNavigatorStyle } from '@navigation/StackNavigators/StackNavigator.style';

export const SettingsOptions: StackNavigationOptions = {
    headerTitle: 'Settings',
    headerStyle: [
        StackNavigatorStyle.navigationScreen,
        StackNavigatorStyle.bottomBorder
    ]
};

export const EditOptions: StackNavigationOptions = {
    headerTitle: 'Edit your profile',
    headerRight: () => <HeaderSave />
};

export const AboutTitle: StackNavigationOptions = {
    headerTitle: 'About'
};

export const DistanceTitle: StackNavigationOptions = {
    headerTitle: 'Distance'
};

export const ShowMeTitle: StackNavigationOptions = {
    headerTitle: 'Show me'
};

export const HelpCenterTitle: StackNavigationOptions = {
    headerTitle: 'Help Center'
};

export const CommunityRulesTitle: StackNavigationOptions = {
    headerTitle: 'Community Rules'
};

export const AccountTitle: StackNavigationOptions = {
    headerTitle: 'Account'
};

export const ChangePasswordTitle: StackNavigationOptions = {
    headerTitle: 'Change password'
};

export const DeleteAccountTitle: StackNavigationOptions = {
    headerTitle: 'Delete account'
};
