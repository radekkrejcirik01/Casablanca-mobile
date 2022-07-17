import { StyleProp, ViewStyle } from 'react-native';

export interface ChatInputProps {
    style?: StyleProp<ViewStyle>;
}

export const ChatInputDefaultProps: ChatInputProps = {
    style: {}
};
