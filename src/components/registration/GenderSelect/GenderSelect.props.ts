import { StyleProp, ViewStyle } from 'react-native';

export interface GenderSelectProps {
    gender: number;
    onSelect: (value: number) => void;
    style?: StyleProp<ViewStyle>;
}

export const GenderSelectDefaultProps: Omit<
    GenderSelectProps,
    'onSelect' | 'gender'
> = {
    style: {}
};
