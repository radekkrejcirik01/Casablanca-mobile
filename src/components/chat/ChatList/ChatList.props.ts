import { StyleProp, ViewStyle } from 'react-native';

export interface ChatListProps {
    data: Array<ChatDataProps>;
    style?: StyleProp<ViewStyle>;
}

export const ChatListDefaultProps: Omit<ChatListProps, 'data'> = {
    style: {}
};

export interface ChatDataProps {
    sender: string;
    name: string;
    message: string;
}
