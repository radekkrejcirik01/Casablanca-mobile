import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Swiper } from '@components/swipe/Swiper/Swiper';
import { SwiperScreenStyle } from '@screens/tab/SwipeScreen/SwipeScreen.style';
import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';
import { View } from 'react-native';

export const SwipeScreen = (): JSX.Element => {
    const data: Array<CardDataProps> = [
        {
            image: 'someURL',
            name: 'Zuzana',
            age: '34',
            tags: ['Theatre', 'Cafe'],
            color: 'blue'
        },
        {
            image: 'someURL',
            name: 'Adela',
            age: '34',
            tags: ['Theatre', 'Cafe'],
            color: 'green'
        },
        {
            image: 'someURL',
            name: 'Radek',
            age: '34',
            tags: ['Theatre', 'Cafe'],
            color: 'blue'
        }
    ];

    return (
        <SafeAreaProvider style={SwiperScreenStyle.safeArea}>
            <View style={SwiperScreenStyle.container}>
                <Swiper data={data} />
            </View>
        </SafeAreaProvider>
    );
};
