import React from 'react';
import { SafeAreaView } from 'react-native';
import { MatchList } from '@components/chat/MatchList/MatchList';
import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';
import { ChatScreenStyle } from '@screens/tab/ChatScreen/ChatScreen.style';
import { ChatList } from '@components/chat/ChatList/ChatList';
import { ChatHeader } from '@components/chat/ChatHeader/ChatHeader';

export const ChatScreen = (): JSX.Element => {
    const data: Array<CardDataProps> = [
        {
            image: 'https://static.onecms.io/wp-content/uploads/sites/6/2019/07/st3-production-still-4-2000.jpg',
            name: 'Zuzana',
            age: '34',
            tags: ['Theatre', 'Cafe'],
            color: 'blue'
        },
        {
            image: 'https://variety.com/wp-content/uploads/2020/05/fyseetv_st_mayahawke_yt_thumbnail.jpg',
            name: 'Ade',
            age: '34',
            tags: ['Theatre', 'Cafe'],
            color: 'green'
        },
        {
            image: 'https://static.onecms.io/wp-content/uploads/sites/6/2019/07/st3-production-still-4-2000.jpg',
            name: 'Radek',
            age: '34',
            tags: ['Theatre', 'Cafe'],
            color: 'blue'
        }
    ];

    return (
        <SafeAreaView style={ChatScreenStyle.container}>
            <ChatHeader />
            <MatchList data={data} />
            <ChatList data={data} />
        </SafeAreaView>
    );
};
