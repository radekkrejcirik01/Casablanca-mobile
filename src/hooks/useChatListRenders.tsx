import React, { useCallback } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { useSelector } from 'react-redux';
import { ChatDataProps } from '@components/chat/ChatList/ChatList.props';
import { ChatItem } from '@components/chat/ChatItem/ChatItem';
import { ReducerProps } from '@store/index.props';

export const useChatListRenders = (
    data: Array<ChatDataProps>
): {
    getItem: (listData: Array<ChatDataProps>, index: number) => ChatDataProps;
    renderItem: ({ item }: ListRenderItemInfo<ChatDataProps>) => JSX.Element;
    getItemCount: () => number;
    keyExtractor: (item: ChatDataProps, index: number) => string;
} => {
    const { email } = useSelector((state: ReducerProps) => state.user);

    const getItem = (
        listData: Array<ChatDataProps>,
        index: number
    ): ChatDataProps => listData[index];

    const renderItem = ({
        item
    }: ListRenderItemInfo<ChatDataProps>): JSX.Element => {
        const { sender, message } = item;

        const isOutbound = sender === email;

        return <ChatItem isOutbound={isOutbound} message={message} />;
    };

    const getItemCount = useCallback((): number => data?.length, [data]);

    const keyExtractor = (item: ChatDataProps): string => item?.id?.toString();

    return { getItem, renderItem, getItemCount, keyExtractor };
};
