import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    Keyboard,
    NativeScrollEvent,
    NativeSyntheticEvent,
    VirtualizedList
} from 'react-native';
import { useSelector } from 'react-redux';
import { ChatListStyle } from '@components/chat/ChatList/ChatList.style';
import { useChatListRenders } from '@hooks/useChatListRenders';
import { useKeyboard } from '@hooks/useKeyboard';
import { ReducerProps } from '@store/index.props';
import {
    ChatDataProps,
    ChatListProps
} from '@components/chat/ChatList/ChatList.props';
import { postRequest } from '@utils/Axios/Axios.service';
import {
    MessagesGetInterface,
    MessagesResponseInterface
} from '@models/Registration/Registration.interface';

export const ChatList = ({ user }: ChatListProps): JSX.Element => {
    const { email } = useSelector((state: ReducerProps) => state.user);

    const [data, setData] = useState<Array<ChatDataProps>>([]);

    const { getItem, renderItem, getItemCount, keyExtractor } =
        useChatListRenders(data);

    const { isKeyboardVisible } = useKeyboard();

    const [scrollEnabled, setScrollEnabled] = useState<boolean>(true);
    const [offset, setOffset] = useState<number>(0);

    const listRef = useRef(null);

    useEffect(() => {
        postRequest<MessagesResponseInterface, MessagesGetInterface>(
            'https://26399civx6.execute-api.eu-central-1.amazonaws.com/messages/get/messages/0',
            {
                email,
                user
            }
        ).subscribe((response: MessagesResponseInterface) => {
            if (response?.status) {
                setData(response?.data);
            }
        });
    }, [email, user]);

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
            contentContainerStyle={ChatListStyle.contentContainer}
        />
    );
};
