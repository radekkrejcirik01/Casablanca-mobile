import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ChatScreenStyle } from '@screens/messages/ChatScreen/ChatScreen.style';
import { ChatList } from '@components/chat/ChatList/ChatList';
import { ChatInput } from '@components/chat/ChatInput/ChatInput';
import { KeyboardAvoidingView } from '@components/general/KeyboardAvoidingView/KeyboardAvoidingView';
import { Modal } from '@components/general/Modal/Modal';
import { InfoProfileScreen } from '@screens/general/InfoProfileScreen/InfoProfileScreen';
import { ReducerProps } from '@store/index.props';
import { setModalVisible } from '@store/ModalReducer';
import { ChatScreenProps } from '@screens/messages/ChatScreen/ChatScreen.props';
import { postRequest } from '@utils/Axios/Axios.service';
import {
    ChatUserGetInterface,
    ChatUserResponseInterface,
    ResponseInterface,
    SendMessageInterface
} from '@models/Registration/Registration.interface';
import { getDateAndTime } from '@functions/getDateAndTime';

export const ChatScreen = ({ route }: ChatScreenProps): JSX.Element => {
    const { user } = route.params;

    const { email } = useSelector((state: ReducerProps) => state.user);

    const isModalVisible = useSelector(
        (state: ReducerProps) => state.modal.isModalVisible
    );
    const dispatch = useDispatch();

    const [modalContent, setModalContent] = useState<JSX.Element>();

    const onClose = useCallback(() => {
        dispatch(setModalVisible(false));
    }, [dispatch]);

    const loadModalData = useCallback(() => {
        postRequest<ChatUserResponseInterface, ChatUserGetInterface>(
            'https://26399civx6.execute-api.eu-central-1.amazonaws.com/messages/get/user',
            {
                user
            }
        ).subscribe((response: ChatUserResponseInterface) => {
            if (response?.status) {
                const { data } = response;
                setModalContent(
                    <InfoProfileScreen onClose={onClose} info={data} />
                );
            }
        });
    }, [onClose, user]);

    useEffect(() => {
        if (isModalVisible) {
            loadModalData();
        }
    }, [isModalVisible, loadModalData]);

    const onSend = useCallback(
        (message: string) => {
            postRequest<ResponseInterface, SendMessageInterface>(
                'https://26399civx6.execute-api.eu-central-1.amazonaws.com/messages/send/message',
                {
                    sender: email,
                    receiver: user,
                    message,
                    time: getDateAndTime()
                }
            ).subscribe();
        },
        [email, user]
    );

    return (
        <SafeAreaView>
            <KeyboardAvoidingView keyboardVerticalOffset={50}>
                <View style={ChatScreenStyle.container}>
                    <ChatList user={user} />
                    <ChatInput onSend={onSend} />
                </View>
            </KeyboardAvoidingView>
            <Modal
                isVisible={isModalVisible}
                backdropOpacity={0.1}
                content={modalContent}
                onClose={onClose}
            />
        </SafeAreaView>
    );
};
