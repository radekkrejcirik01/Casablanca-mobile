import React from 'react';
import { Keyboard, VirtualizedList } from 'react-native';
import {
    ChatListDefaultProps,
    ChatListProps
} from '@components/chat/ChatList/ChatList.props';
import { ChatListStyle } from '@components/chat/ChatList/ChatList.style';
import { useChatListRenders } from '@hooks/useChatListRenders';

export const ChatList = ({ data, style }: ChatListProps): JSX.Element => {
    const { getItem, renderItem, getItemCount, keyExtractor } =
        useChatListRenders(data);

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
