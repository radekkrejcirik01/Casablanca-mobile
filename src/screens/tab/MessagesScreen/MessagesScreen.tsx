import React from 'react';
import { SafeAreaView } from 'react-native';
import { MatchList } from '@components/messages/MatchList/MatchList';
import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';
import { MessagesScreenStyle } from '@screens/tab/MessagesScreen/MessagesScreen.style';
import { MessagesList } from '@components/messages/MessagesList/MessagesList';
import { MessagesHeader } from '@components/messages/MessagesHeader/MessagesHeader';

export const MessagesScreen = (): JSX.Element => {
    const data: Array<CardDataProps> = [
        {
            images: [
                'https://static.onecms.io/wp-content/uploads/sites/6/2019/07/st3-production-still-4-2000.jpg'
            ],
            name: 'Zuzana',
            age: '34',
            tags: ['Theatre', 'Cafe'],
            color: 'blue'
        },
        {
            images: [
                'https://variety.com/wp-content/uploads/2020/05/fyseetv_st_mayahawke_yt_thumbnail.jpg'
            ],
            name: 'Ade',
            age: '34',
            tags: ['Theatre', 'Cafe'],
            color: 'green'
        },
        {
            images: [
                'https://static.onecms.io/wp-content/uploads/sites/6/2019/07/st3-production-still-4-2000.jpg'
            ],
            name: 'Radek',
            age: '34',
            tags: ['Theatre', 'Cafe'],
            color: 'blue'
        }
    ];

    return (
        <SafeAreaView style={MessagesScreenStyle.container}>
            <MessagesHeader />
            <MatchList data={data} />
            <MessagesList data={data} />
        </SafeAreaView>
    );
};
