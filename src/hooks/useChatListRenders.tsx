import React, { useCallback } from 'react';
import { ListRenderItemInfo, Text, View } from 'react-native';
import { ChatDataProps } from '@components/chat/ChatList/ChatList.props';
import { ChatListStyle } from '@components/chat/ChatList/ChatList.style';

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

        return (
            <View
                style={[
                    ChatListStyle.item,
                    sender === 'radek@gmail.com' && ChatListStyle.right
                ]}
            >
                <View>
                    <Text style={ChatListStyle.text}>{message}</Text>
                </View>
            </View>
        );
    };

    const getItemCount = useCallback((): number => data?.length, [data]);

    // TODO: change to item's ID
    const keyExtractor = (item: ChatDataProps, index: number): string =>
        item.name + index;

    return { getItem, renderItem, getItemCount, keyExtractor };
};
