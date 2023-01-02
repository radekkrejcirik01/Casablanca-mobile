import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ChatScreenStyle } from '@screens/messages/ChatScreen/ChatScreen.style';
import { ChatList } from '@components/chat/ChatList/ChatList';
import { KeyboardAvoidingView } from '@components/general/KeyboardAvoidingView/KeyboardAvoidingView';
import { Modal } from '@components/general/Modal/Modal';
import { InfoProfileScreen } from '@screens/general/InfoProfileScreen/InfoProfileScreen';
import { ReducerProps } from '@store/index.props';
import { setModalVisible } from '@store/ModalReducer';
import { ChatScreenProps } from '@screens/messages/ChatScreen/ChatScreen.props';
import { postRequest } from '@utils/Axios/Axios.service';
import {
    ChatUserGetInterface,
    ChatUserResponseInterface
} from '@models/Registration/Registration.interface';

export const ChatScreen = ({ route }: ChatScreenProps): JSX.Element => {
    const { user } = route.params;

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

    return (
        <SafeAreaView>
            <KeyboardAvoidingView keyboardVerticalOffset={50}>
                <View style={ChatScreenStyle.container}>
                    <ChatList user={user} />
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
