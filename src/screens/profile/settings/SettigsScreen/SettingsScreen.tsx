import React from 'react';
import { ScrollView } from 'react-native';
import { SettingsList } from '@components/settings/SettingsList/SettingsList';

export const SettingsScreen = (): JSX.Element => (
    <ScrollView>
        <SettingsList />
    </ScrollView>
);
