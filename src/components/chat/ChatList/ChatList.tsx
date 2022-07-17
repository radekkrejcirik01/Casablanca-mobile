import React from 'react';
import {
    Keyboard,
    ListRenderItemInfo,
    Text,
    View,
    VirtualizedList
} from 'react-native';
import {
    ChatDataProps,
    ChatListDefaultProps,
    ChatListProps
} from '@components/chat/ChatList/ChatList.props';
import { ChatListStyle } from '@components/chat/ChatList/ChatList.style';

export const ChatList = ({ data, style }: ChatListProps): JSX.Element => {
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

    const getItem = (
        listData: Array<ChatDataProps>,
        index: number
    ): ChatDataProps => listData[index];

    const getItemCount = (): number => data.length;

    return (
        <VirtualizedList
            data={data}
            renderItem={renderItem}
            initialNumToRender={40}
            contentContainerStyle={ChatListStyle.contentContainer}
            showsVerticalScrollIndicator={false}
            getItem={getItem}
            getItemCount={getItemCount}
            keyExtractor={(item, index) => item.name + index}
            inverted
            keyboardShouldPersistTaps="handled"
            onScrollBeginDrag={Keyboard.dismiss}
            style={style}
        />
    );
};

ChatList.defaultProps = ChatListDefaultProps;
