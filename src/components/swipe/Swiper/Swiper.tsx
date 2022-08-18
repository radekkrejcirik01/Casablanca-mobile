import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ViewPager from '@react-native-community/viewpager';
import LottieView from 'lottie-react-native';
import { SwiperCard } from '@components/swipe/SwiperCard/SwiperCard';
import {
    CardDataProps,
    SwiperProps
} from '@components/swipe/Swiper/Swiper.props';
import { SwiperStyle } from '@components/swipe/Swiper/Swiper.style';
import { usePullToRefresh } from '@hooks/usePullToRefresh';
import { useLottie } from '@hooks/useLottie';

export const Swiper = ({ data }: SwiperProps): JSX.Element => {
    const { name } = data[0];

    const { top } = useSafeAreaInsets();

    const { lottieRef, lottieReset, lottiePlay } = useLottie();

    const {
        isAnimation,
        onPageScroll,
        onPageScrollStateChanged,
        onPageSelected,
        onCardTouch
    } = usePullToRefresh(name);

    useEffect(() => {
        if (isAnimation) {
            lottiePlay();
            return;
        }
        lottieReset();
    }, [isAnimation, lottiePlay, lottieReset]);

    return (
        <View style={SwiperStyle.container}>
            <View
                style={[
                    SwiperStyle.lottieContainer,
                    {
                        top
                    }
                ]}
            >
                <LottieView
                    ref={lottieRef}
                    source={require('../../../assets/animations/animation.json')}
                    autoPlay={false}
                    loop={false}
                    style={SwiperStyle.lottie}
                />
            </View>
            <ViewPager
                orientation="vertical"
                initialPage={0}
                onPageScroll={onPageScroll}
                onPageScrollStateChanged={onPageScrollStateChanged}
                onPageSelected={onPageSelected}
                style={SwiperStyle.viewPager}
            >
                {data.map((source: CardDataProps) => (
                    <SwiperCard
                        key={source.name}
                        card={source}
                        onCardTouch={onCardTouch}
                    />
                ))}
            </ViewPager>
        </View>
    );
};
