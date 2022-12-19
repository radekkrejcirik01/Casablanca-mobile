import React, { useMemo } from 'react';
import { SafeAreaView, View } from 'react-native';
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
import { postRequest } from '@utils/Axios/Axios.service';
import {
    NotifyDeviceInterface,
    ResponseInterface
} from '@models/Registration/Registration.interface';

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
        { sender: 'radek@gmail.com', namer: 'radek', message: 'zprava' },
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
        postRequest<ResponseInterface, NotifyDeviceInterface>(
            'https://43bblrwkdc.execute-api.eu-central-1.amazonaws.com/pushnotifications/notify',
            {
                token: 'cqoJ3xrI1Ul7tHF9Mp4jce:APA91bG6b-cKd648nJtuI-4lqljsAdOdMSzMlb-KadkGNs96CA6ZX1ZJliEC5aShDHfjXux-rVRKt6-E4vemMj0f2vyFat3qhfEmC2XQgZgrMIgG8TdA5F57Xj4vjm2UBA0FYvPxZNxX'
            }
        ).subscribe();
    };

    return (
        <SafeAreaView>
            <KeyboardAvoidingView keyboardVerticalOffset={50}>
                <View style={ChatScreenStyle.container}>
                    <ChatList data={data} />
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
