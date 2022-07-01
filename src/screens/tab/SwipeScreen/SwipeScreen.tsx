import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Swiper } from '@components/swipe/Swiper/Swiper';
import { SwiperScreenStyle } from '@screens/tab/SwipeScreen/SwipeScreen.style';
import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';
import { View } from 'react-native';
import COLORS from '@constants/COLORS';
import { LoginScreenStyle } from '@screens/login/Login/LoginScreen.style';
import LinearGradient from 'react-native-linear-gradient';

export const SwipeScreen = (): JSX.Element => {
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
            name: 'Adela',
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
        <SafeAreaProvider style={SwiperScreenStyle.safeArea}>
            <LinearGradient
                colors={[COLORS.MAIN_RED, COLORS.MAIN_BLUE]}
                locations={[0.15, 0.9]}
                style={LoginScreenStyle.container}
            >
                <Swiper data={data} />
            </LinearGradient>
        </SafeAreaProvider>
    );
};
