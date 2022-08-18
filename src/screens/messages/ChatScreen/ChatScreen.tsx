import React, { useMemo } from 'react';
import { SafeAreaView } from 'react-native';
import { ChatScreenStyle } from '@screens/messages/ChatScreen/ChatScreen.style';
import { ChatList } from '@components/chat/ChatList/ChatList';
import { ChatInput } from '@components/chat/ChatInput/ChatInput';
import { KeyboardAvoidingView } from '@components/general/KeyboardAvoidingView/KeyboardAvoidingView';
import { Modal } from '@components/general/Modal/Modal';
import { InfoProfileScreen } from '@screens/general/InfoProfileScreen/InfoProfileScreen';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerProps } from '@store/index.props';
import { setModalVisible } from '@store/ModalReducer';
import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';

export const ChatScreen = (): JSX.Element => {
    const dispatch = useDispatch();

    const isModalVisible = useSelector(
        (state: ReducerProps) => state.modal.isModalVisible
    );

    const onClose = () => {
        dispatch(setModalVisible(false));
    };

    const modalContent = useMemo((): JSX.Element => {
        const info: CardDataProps = {
            images: [
                'https://s5.favim.com/orig/69/analog-boy-grunge-hipster-Favim.com-654208.jpg',
                'https://s5.favim.com/orig/69/analog-boy-grunge-hipster-Favim.com-654208.jpg',
                'https://s5.favim.com/orig/69/analog-boy-grunge-hipster-Favim.com-654208.jpg',
                'https://s5.favim.com/orig/69/analog-boy-grunge-hipster-Favim.com-654208.jpg'
            ],
            name: 'Radek',
            age: '34',
            tags: ['Theatre', 'Cafe']
        };

        return <InfoProfileScreen onClose={onClose} info={info} />;
    }, [onClose]);

    const data = [
        { sender: 'radek@gmail.com', name: 'radek', message: 'prvni zprava' },
        { sender: 'zuzka@gmail.com', name: 'zuzka', message: 'zprava2' },
        { sender: 'radek@gmail.com', name: 'radek', message: 'zprava' },
        { sender: 'zuzka@gmail.com', name: 'zuzka', message: 'zprava2' },
        { sender: 'radek@gmail.com', name: 'radek', message: 'zprava' },
        { sender: 'zuzka@gmail.com', name: 'zuzka', message: 'zprava2' },
        { sender: 'radek@gmail.com', name: 'radek', message: 'zprava' },
        { sender: 'zuzka@gmail.com', name: 'zuzka', message: 'zprava2' },
        { sender: 'radek@gmail.com', name: 'radek', message: 'zprava' },
        { sender: 'zuzka@gmail.com', name: 'zuzka', message: 'zprava2' },
        { sender: 'radek@gmail.com', name: 'radek', message: 'zprava' },
        { sender: 'zuzka@gmail.com', name: 'zuzka', message: 'zprava2' },
        { sender: 'radek@gmail.com', name: 'radek', message: 'zprava' },
        {
            sender: 'zuzka@gmail.com',
            name: 'zuzka',
            message: 'posledni zprava'
        },
        { sender: 'radek@gmail.com', name: 'radek', message: 'zprava' },
        { sender: 'zuzka@gmail.com', name: 'zuzka', message: 'zprava2' },
        { sender: 'radek@gmail.com', name: 'radek', message: 'zprava' },
        {
            sender: 'zuzka@gmail.com',
            name: 'zuzka',
            message: 'posledni zprava'
        },
        { sender: 'zuzka@gmail.com', name: 'zuzka', message: 'zprava2' },
        { sender: 'radek@gmail.com', name: 'radek', message: 'zprava' },
        { sender: 'zuzka@gmail.com', name: 'zuzka', message: 'zprava2' },
        { sender: 'radek@gmail.com', name: 'radek', message: 'zprava' },
        {
            sender: 'zuzka@gmail.com',
            name: 'zuzka',
            message: 'posledni zprava'
        },
        { sender: 'radek@gmail.com', name: 'radek', message: 'zprava' },
        { sender: 'zuzka@gmail.com', name: 'zuzka', message: 'zprava2' },
        { sender: 'radek@gmail.com', name: 'radek', message: 'zprava' },
        { sender: 'zuzka@gmail.com', name: 'zuzka', message: 'posledni zprava' }
    ];

    const onSend = (value: string) => {
        console.log(value);
    };

    return (
        <SafeAreaView>
            <KeyboardAvoidingView keyboardVerticalOffset={44}>
                <ChatList data={data} style={ChatScreenStyle.chatList} />
                <ChatInput onSend={onSend} style={ChatScreenStyle.chatInput} />
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
