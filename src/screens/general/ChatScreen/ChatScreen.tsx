import React from 'react';
import { KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { ChatScreenStyle } from '@screens/general/ChatScreen/ChatScreen.style';
import { ChatList } from '@components/chat/ChatList/ChatList';
import { ChatInput } from '@components/chat/ChatInput/ChatInput';

export const ChatScreen = (): JSX.Element => {
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

    return (
        <SafeAreaView style={ChatScreenStyle.container}>
            <ChatList data={data} />
            <KeyboardAvoidingView behavior="padding">
                <ChatInput />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};
