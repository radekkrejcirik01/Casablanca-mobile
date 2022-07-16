import React from 'react';
import { FlatList, ListRenderItemInfo, Text, View } from 'react-native';
import {
    ChatDataProps,
    ChatListProps
} from '@components/chat/ChatList/ChatList.props';
import { ChatListStyle } from '@components/chat/ChatList/ChatList.style';

export const ChatList = ({ data }: ChatListProps): JSX.Element => {
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
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            initialNumToRender={20}
            contentContainerStyle={ChatListStyle.contentContainer}
            showsVerticalScrollIndicator={false}
        />
    );
};
