import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState
} from 'react';
import {
    Keyboard,
    NativeScrollEvent,
    NativeSyntheticEvent,
    StyleProp,
    Text,
    TextInput,
    View,
    ViewStyle,
    VirtualizedList
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
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
    MessagesResponseInterface,
    ReadMessageInterface,
    ResponseInterface,
    SendMessageInterface
} from '@models/Registration/Registration.interface';
import { setChatUserAction } from '@store/MessagingReducer';
import COLORS from '@constants/COLORS';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { ThemeView } from '@components/general/ThemeView/ThemeView';
import { useTheme } from '@hooks/useTheme';
import { getDateAndTime } from '@functions/getDateAndTime';

export const ChatList = ({ user }: ChatListProps): JSX.Element => {
    const { email, firstname } = useSelector(
        (state: ReducerProps) => state.user
    );
    const { chatUser } = useSelector((state: ReducerProps) => state.messaging);
    const dispatch = useDispatch();

    const [data, setData] = useState<Array<ChatDataProps>>([]);
    const [messageValue, setMessageValue] = useState<string>();

    const { isDarkMode } = useTheme();
    const { getItem, renderItem, getItemCount, keyExtractor } =
        useChatListRenders(data);

    const { isKeyboardVisible } = useKeyboard();

    const [scrollEnabled, setScrollEnabled] = useState<boolean>(true);
    const [offset, setOffset] = useState<number>(0);

    const listRef = useRef(null);

    const updateMessageRead = useCallback(() => {
        postRequest<ResponseInterface, ReadMessageInterface>(
            'https://26399civx6.execute-api.eu-central-1.amazonaws.com/messages/update/read',
            {
                email,
                user
            }
        ).subscribe();
    }, [email, user]);

    const loadMessages = useCallback(
        (read = false) => {
            postRequest<MessagesResponseInterface, MessagesGetInterface>(
                'https://26399civx6.execute-api.eu-central-1.amazonaws.com/messages/get/messages/0',
                {
                    email,
                    user
                }
            ).subscribe((response: MessagesResponseInterface) => {
                if (response?.status) {
                    setData(response?.data);
                    if (read) {
                        updateMessageRead();
                    }
                }
            });
        },
        [email, updateMessageRead, user]
    );

    useEffect(() => {
        if (chatUser === user) {
            loadMessages(true);
            dispatch(setChatUserAction(null));
        }
    }, [dispatch, loadMessages, chatUser, updateMessageRead, user]);

    useEffect(() => {
        loadMessages();
    }, [email, loadMessages, user]);

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

    const sendMessage = useCallback(() => {
        postRequest<ResponseInterface, SendMessageInterface>(
            'https://26399civx6.execute-api.eu-central-1.amazonaws.com/messages/send/message',
            {
                sender: email,
                senderFirstname: firstname,
                receiver: user,
                message: messageValue,
                time: getDateAndTime()
            }
        ).subscribe();
    }, [firstname, email, user, messageValue]);

    const onSend = useCallback(() => {
        Keyboard.dismiss();
        sendMessage();

        const newMessage: ChatDataProps = {
            id: data[0].id + 1,
            sender: email,
            receiver: user,
            message: messageValue,
            time: getDateAndTime()
        };
        setData([newMessage, ...data]);

        setMessageValue(null);
    }, [data, email, messageValue, sendMessage, user]);

    const containerBorder = useMemo(
        (): StyleProp<ViewStyle> => ({
            borderColor: isDarkMode ? COLORS.BLACK_200 : COLORS.WHITE
        }),
        [isDarkMode]
    );

    return (
        <>
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
            <ThemeView style={[ChatListStyle.container, containerBorder]}>
                <TextInput
                    placeholder="Message..."
                    placeholderTextColor={COLORS.WHITE}
                    onChangeText={setMessageValue}
                    value={messageValue}
                    multiline
                    selectionColor={COLORS.WHITE}
                    style={ChatListStyle.input}
                />
                <View style={ChatListStyle.sendView}>
                    <TouchableOpacity disabled={!messageValue} onPress={onSend}>
                        <Text style={ChatListStyle.send}>Send</Text>
                    </TouchableOpacity>
                </View>
            </ThemeView>
        </>
    );
};
