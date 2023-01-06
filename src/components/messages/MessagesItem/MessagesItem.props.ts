import { MessagesListDataProps } from '@components/messages/MessagesList/MessagesList.props';

export interface MessagesItemProps {
    item: MessagesListDataProps;
    onPress: (item: MessagesListDataProps) => void;
}
