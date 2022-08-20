import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    Keyboard,
    NativeScrollEvent,
    NativeSyntheticEvent,
    VirtualizedList
} from 'react-native';
import {
    ChatListDefaultProps,
    ChatListProps
} from '@components/chat/ChatList/ChatList.props';
import { ChatListStyle } from '@components/chat/ChatList/ChatList.style';
import { useChatListRenders } from '@hooks/useChatListRenders';
import { useKeyboard } from '@hooks/useKeyboard';

export const ChatList = ({ data, style }: ChatListProps): JSX.Element => {
    const { getItem, renderItem, getItemCount, keyExtractor } =
        useChatListRenders(data);

    const { isKeyboardVisible } = useKeyboard();

    const [scrollEnabled, setScrollEnabled] = useState<boolean>(true);
    const [offset, setOffset] = useState<number>(0);

    const listRef = useRef(null);

    useEffect(() => {
        if (!isKeyboardVisible) {
            listRef.current?.scrollToOffset({ offset });
            setScrollEnabled(true);
        }
    }, [isKeyboardVisible, offset]);

    const onScrollBeginDrag = useCallback(
        (event: NativeSyntheticEvent<NativeScrollEvent>) => {
            if (isKeyboardVisible) {
                setScrollEnabled(false);
                setOffset(event.nativeEvent.contentOffset.y);
                Keyboard.dismiss();
            }
        },
        [isKeyboardVisible]
    );

    return (
        <VirtualizedList
            ref={listRef}
            data={data}
            getItem={getItem}
            renderItem={renderItem}
            getItemCount={getItemCount}
            keyExtractor={keyExtractor}
            initialNumToRender={40}
            showsVerticalScrollIndicator={false}
            inverted
            scrollEnabled={scrollEnabled}
            keyboardShouldPersistTaps="always"
            onScrollBeginDrag={onScrollBeginDrag}
            style={style}
            contentContainerStyle={ChatListStyle.contentContainer}
        />
    );
};

ChatList.defaultProps = ChatListDefaultProps;
