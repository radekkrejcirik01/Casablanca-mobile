import { StyleProp, ViewStyle } from 'react-native';

export interface SelectBoxProps {
    onPressIn: () => void;
    title: string;
    value: boolean;
    style?: StyleProp<ViewStyle>;
}

export const SelectBoxDefaultProps: Omit<
    SelectBoxProps,
    'onPressIn' | 'title' | 'value'
> = {
    style: {}
};
