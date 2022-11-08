import React from 'react';
import { View } from 'react-native';
import { SettingsList } from '@components/settings/SettingsList/SettingsList';
import { Title } from '@components/general/Title/Title';
import { ProfileSettingsStyle } from '@components/profile/ProfileSettings/ProfileSettings.style';

export const ProfileSettings = (): JSX.Element => (
    <View style={ProfileSettingsStyle.container}>
        <Title title="Settings" style={ProfileSettingsStyle.title} />
        <SettingsList />
    </View>
);
