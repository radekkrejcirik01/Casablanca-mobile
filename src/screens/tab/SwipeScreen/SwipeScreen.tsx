import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Swiper } from '@components/swipe/Swiper/Swiper';
import { SwiperScreenStyle } from '@screens/tab/SwipeScreen/SwipeScreen.style';
import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';

export const SwipeScreen = (): JSX.Element => {
    const data: Array<CardDataProps> = [
        {
            images: [
                'https://s5.favim.com/orig/69/analog-boy-grunge-hipster-Favim.com-654208.jpg',
                'https://s5.favim.com/orig/69/analog-boy-grunge-hipster-Favim.com-654208.jpg',
                'https://s5.favim.com/orig/69/analog-boy-grunge-hipster-Favim.com-654208.jpg',
                'https://s5.favim.com/orig/69/analog-boy-grunge-hipster-Favim.com-654208.jpg'
            ],
            name: 'Radek',
            age: '34',
            tags: ['Theatre', 'Cafe'],
            color: 'blue'
        },
        {
            images: [
                'https://static.onecms.io/wp-content/uploads/sites/6/2019/07/st3-production-still-4-2000.jpg',
                'https://static.onecms.io/wp-content/uploads/sites/6/2019/07/st3-production-still-4-2000.jpg',
                'https://variety.com/wp-content/uploads/2020/05/fyseetv_st_mayahawke_yt_thumbnail.jpg',
                'https://variety.com/wp-content/uploads/2020/05/fyseetv_st_mayahawke_yt_thumbnail.jpg'
            ],
            name: 'Adela',
            age: '34',
            tags: ['Theatre', 'Cafe'],
            color: 'green'
        },
        {
            images: [
                'https://static.onecms.io/wp-content/uploads/sites/6/2019/07/st3-production-still-4-2000.jpg',
                'https://static.onecms.io/wp-content/uploads/sites/6/2019/07/st3-production-still-4-2000.jpg'
            ],
            name: 'Tomas',
            age: '34',
            tags: ['Theatre', 'Cafe'],
            color: 'blue'
        }
    ];

    return (
        <SafeAreaProvider style={SwiperScreenStyle.safeArea}>
            <Swiper data={data} />
        </SafeAreaProvider>
    );
};
