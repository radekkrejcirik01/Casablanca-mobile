import { StyleProp, ViewStyle } from 'react-native';

export interface GenderSelectProps {
    gender: string;
    onSelect: (value: string) => void;
    style?: StyleProp<ViewStyle>;
}

export const GenderSelectDefaultProps: Omit<
    GenderSelectProps,
    'onSelect' | 'gender'
> = {
    style: {}
};
