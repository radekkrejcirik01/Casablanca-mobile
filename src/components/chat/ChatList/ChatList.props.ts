export interface ChatListProps {
    data: Array<ChatDataProps>;
}

export interface ChatDataProps {
    sender: string;
    name: string;
    message: string;
}
