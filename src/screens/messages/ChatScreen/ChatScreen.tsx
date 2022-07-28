import React from 'react';
import { SafeAreaView } from 'react-native';
import { ChatScreenStyle } from '@screens/messages/ChatScreen/ChatScreen.style';
import { ChatList } from '@components/chat/ChatList/ChatList';
import { ChatInput } from '@components/chat/ChatInput/ChatInput';
import { KeyboardAvoidingView } from '@components/general/KeyboardAvoidingView/KeyboardAvoidingView';

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

    const onSend = (value: string) => {
        console.log(value);
    };

    return (
        <SafeAreaView>
            <KeyboardAvoidingView keyboardVerticalOffset={44}>
                <ChatList data={data} style={ChatScreenStyle.chatList} />
                <ChatInput onSend={onSend} style={ChatScreenStyle.chatInput} />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};
