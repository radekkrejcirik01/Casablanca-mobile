import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '@constants/COLORS';
import { Swiper } from '@components/swipe/Swiper/Swiper';
import { SwiperScreenStyle } from '@screens/tab/SwipeScreen/SwipeScreen.style';

export const SwipeScreen = (): JSX.Element => (
    <SafeAreaProvider style={SwiperScreenStyle.safeArea}>
        <LinearGradient
            colors={[COLORS.MAIN_RED, COLORS.MAIN_BLUE]}
            locations={[0.15, 0.9]}
            style={SwiperScreenStyle.container}
        >
            <Swiper />
        </LinearGradient>
    </SafeAreaProvider>
);
