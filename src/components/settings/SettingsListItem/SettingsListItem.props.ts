import { StyleProp, ViewStyle } from 'react-native';

export interface SettingsListItemProps {
    icon?: JSX.Element;
    title: string;
    description?: string;
    hasSwitch?: boolean;
    toggleSwitch?: (value: boolean) => void;
    switchTrue?: boolean;
    hasArrow?: boolean;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
}

export const SettingsListItemDefaultProps: Omit<
    SettingsListItemProps,
    'title'
> = {
    icon: undefined,
    description: null,
    hasSwitch: false,
    toggleSwitch: (value: boolean) => {},
    switchTrue: false,
    hasArrow: false,
    onPress: () => {}
};
