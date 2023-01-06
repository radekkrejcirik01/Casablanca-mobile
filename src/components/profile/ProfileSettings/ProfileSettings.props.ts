import { StyleProp, ViewStyle } from 'react-native';

export interface ProfileSettingsProps {
    style?: StyleProp<ViewStyle>;
}

export const ProfileSettingsDefaultProps: ProfileSettingsProps = {
    style: {}
};
