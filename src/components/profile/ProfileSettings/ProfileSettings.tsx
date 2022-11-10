import React from 'react';
import { View } from 'react-native';
import { SettingsList } from '@components/settings/SettingsList/SettingsList';
import { Title } from '@components/general/Title/Title';
import { ProfileSettingsStyle } from '@components/profile/ProfileSettings/ProfileSettings.style';
import {
    ProfileSettingsDefaultProps,
    ProfileSettingsProps
} from '@components/profile/ProfileSettings/ProfileSettings.props';

export const ProfileSettings = ({
    style
}: ProfileSettingsProps): JSX.Element => (
    <View style={style}>
        <Title title="Settings" />
        <SettingsList style={ProfileSettingsStyle.settingsList} />
    </View>
);

ProfileSettings.defaultProps = ProfileSettingsDefaultProps;
