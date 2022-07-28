import { Omit, StyleProp, ViewStyle } from 'react-native';

export interface ChatInputProps {
    onSend: (value: string) => void;
    style?: StyleProp<ViewStyle>;
}

export const ChatInputDefaultProps: Omit<ChatInputProps, 'onSend'> = {
    style: {}
};
