import { StyleProp, ViewStyle } from 'react-native';

export interface TextAreaProps {
    value: string;
    onChange: (value: string) => void;
    viewStyle?: StyleProp<ViewStyle>;
}

export const TextAreaDefaultProps: Omit<TextAreaProps, 'value' | 'onChange'> = {
    viewStyle: {}
};
