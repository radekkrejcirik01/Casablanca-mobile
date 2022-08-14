import React from 'react';
import { StackNavigationOptions } from '@react-navigation/stack';
import { HeaderSave } from '@components/general/HeaderSave/HeaderSave';

export const SettingsTitle: StackNavigationOptions = {
    headerTitle: 'Settings'
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
