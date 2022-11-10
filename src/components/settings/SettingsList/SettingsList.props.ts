import { StyleProp, ViewStyle } from 'react-native';

export interface SettingsListProps {
    style?: StyleProp<ViewStyle>;
}

export const SettingsListDefaultProps: SettingsListProps = {
    style: {}
};
