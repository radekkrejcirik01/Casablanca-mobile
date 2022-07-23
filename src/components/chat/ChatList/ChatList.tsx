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

    const getItemCount = (): number => data.length;

    // TODO: change to item's ID
    const keyExtractor = (item: ChatDataProps, index: number): string =>
        item.name + index;

    return (
        <VirtualizedList
            data={data}
            getItem={getItem}
            renderItem={renderItem}
            getItemCount={getItemCount}
            keyExtractor={keyExtractor}
            initialNumToRender={40}
            showsVerticalScrollIndicator={false}
            inverted
            keyboardShouldPersistTaps="handled"
            onScrollBeginDrag={Keyboard.dismiss}
            style={style}
            contentContainerStyle={ChatListStyle.contentContainer}
        />
    );
};

ChatList.defaultProps = ChatListDefaultProps;
