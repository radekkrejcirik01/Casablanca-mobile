import React, { useCallback, useEffect, useMemo } from 'react';
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
import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';
import { ChatScreenProps } from '@screens/messages/ChatScreen/ChatScreen.props';

export const ChatScreen = ({ route }: ChatScreenProps): JSX.Element => {
    const { user } = route.params;

    const isModalVisible = useSelector(
        (state: ReducerProps) => state.modal.isModalVisible
    );
    const dispatch = useDispatch();

    const loadModalData = useCallback(() => {}, []);

    useEffect(() => {
        if (isModalVisible) {
            loadModalData();
        }
    }, [isModalVisible, loadModalData]);

    const onClose = useCallback(() => {
        dispatch(setModalVisible(false));
    }, [dispatch]);

    const modalContent = useMemo((): JSX.Element => {
        const info: CardDataProps = {
            photos: [
                'https://s5.favim.com/orig/69/analog-boy-grunge-hipster-Favim.com-654208.jpg'
            ],
            firstname: 'Radek',
            birthday: '2001-11-11',
            about: 'a',
            tags: ['Theatre', 'Cafe']
        };

        return <InfoProfileScreen onClose={onClose} info={info} />;
    }, [onClose]);

    const onSend = (value: string) => {};

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
