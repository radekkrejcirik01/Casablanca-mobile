import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '@constants/COLORS';
import { Swiper } from '@components/swipe/Swiper/Swiper';
import { SwiperScreenStyle } from '@screens/tab/SwipeScreen/SwipeScreen.style';
import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';

export const SwipeScreen = (): JSX.Element => {
    const data: Array<CardDataProps> = [
        {
            image: 'https://assets.vogue.com/photos/5d9bc59349674d0009ebdd54/master/w_2732,h_4098,c_limit/Mika-Paco.jpg',
            name: 'Zuzana',
            age: '34',
            tags: ['Theatre', 'Cafe'],
            color: 'red'
        },
        {
            image: 'https://assets.vogue.com/photos/5d9bc59349674d0009ebdd54/master/w_2732,h_4098,c_limit/Mika-Paco.jpg',
            name: 'Adela',
            age: '34',
            tags: ['Theatre', 'Cafe'],
            color: 'blue'
        },
        {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Romantic_fashion_model.JPG/1200px-Romantic_fashion_model.JPG',
            name: 'Radek',
            age: '34',
            tags: ['Theatre', 'Cafe'],
            color: 'green'
        }
    ];
    return (
        <SafeAreaProvider style={SwiperScreenStyle.safeArea}>
            <LinearGradient
                colors={[COLORS.MAIN_RED, COLORS.MAIN_BLUE]}
                locations={[0.15, 0.9]}
                style={SwiperScreenStyle.container}
            >
                <Swiper data={data} />
            </LinearGradient>
        </SafeAreaProvider>
    );
};
