import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Title } from '@components/general/Title/Title';
import { MatchList } from '@components/chat/MatchList/MatchList';
import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';
import { ChatScreenStyle } from '@screens/tab/ChatScreen/ChatScreen.style';
import { ChatList } from '@components/chat/ChatList/ChatList';

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
            <Title title="Chat" style={ChatScreenStyle.title} />
            <View style={ChatScreenStyle.matchView}>
                <MatchList data={data} />
            </View>
            <Text style={ChatScreenStyle.text}>Messages</Text>
            <View style={ChatScreenStyle.chatView}>
                <ChatList data={data} />
            </View>
        </SafeAreaView>
    );
};
