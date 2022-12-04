import React from 'react';
import { StackNavigationOptions } from '@react-navigation/stack';
import { SaveHeader } from '@components/general/SaveHeader/SaveHeader';

export const AboutTitle: StackNavigationOptions = {
    headerTitle: 'About'
};

export const DistancePreferenceOptions: StackNavigationOptions = {
    headerTitle: 'Distance preference',
    headerRight: () => <SaveHeader />
};

export const AgePreferenceOptions: StackNavigationOptions = {
    headerTitle: 'Age preference',
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
