import React, { useCallback } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { ChatDataProps } from '@components/chat/ChatList/ChatList.props';
import { ChatItem } from '@components/chat/ChatItem/ChatItem';

export const useChatListRenders = (
    data: Array<ChatDataProps>
): {
    getItem: (listData: Array<ChatDataProps>, index: number) => ChatDataProps;
    renderItem: ({ item }: ListRenderItemInfo<ChatDataProps>) => JSX.Element;
    getItemCount: () => number;
    keyExtractor: (item: ChatDataProps, index: number) => string;
} => {
    const getItem = (
        listData: Array<ChatDataProps>,
        index: number
    ): ChatDataProps => listData[index];

    const renderItem = ({
        item
    }: ListRenderItemInfo<ChatDataProps>): JSX.Element => {
        const { sender, name, message } = item;

        const isOutbound = sender === 'radek@gmail.com';

        return <ChatItem isOutbound={isOutbound} message={message} />;
    };

    const getItemCount = useCallback((): number => data?.length, [data]);

    // TODO: change to item's ID
    const keyExtractor = (item: ChatDataProps, index: number): string =>
        item.name + index;

    return { getItem, renderItem, getItemCount, keyExtractor };
};
