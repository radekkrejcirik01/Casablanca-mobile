import React from 'react';
import { StackNavigationOptions } from '@react-navigation/stack';
import { SaveHeader } from '@components/general/SaveHeader/SaveHeader';

export const AboutTitle: StackNavigationOptions = {
    headerTitle: 'About'
};

export const DistanceOptions: StackNavigationOptions = {
    headerTitle: 'Distance',
    headerRight: () => <SaveHeader />
};

export const ShowMeOptions: StackNavigationOptions = {
    headerTitle: 'Show me',
    headerRight: () => <SaveHeader />
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
