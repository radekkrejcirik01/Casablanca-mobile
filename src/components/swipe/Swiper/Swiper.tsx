import React from 'react';
import ViewPager from '@react-native-community/viewpager';
import { SwiperCard } from '@components/swipe/SwiperCard/SwiperCard';
import {
    CardDataProps,
    SwiperProps
} from '@components/swipe/Swiper/Swiper.props';
import { SwiperStyle } from '@components/swipe/Swiper/Swiper.style';

export const Swiper = ({ data }: SwiperProps): JSX.Element => (
    <ViewPager
        orientation="vertical"
        initialPage={0}
        style={SwiperStyle.container}
    >
        {data.map((source: CardDataProps) => (
            <SwiperCard key={source.name} card={source} />
        ))}
    </ViewPager>
);
