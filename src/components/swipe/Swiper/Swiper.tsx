import React from 'react';
import ViewPager from '@react-native-community/viewpager';
import { SwiperCard } from '@components/swipe/SwiperCard/SwiperCard';
import { CardDataInterface } from '@components/swipe/Swiper/Swiper.props';
import { SwiperStyle } from '@components/swipe/Swiper/Swiper.style';

export const Swiper = (): JSX.Element => {
    const data: Array<CardDataInterface> = [
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
        <ViewPager
            orientation="vertical"
            initialPage={0}
            style={SwiperStyle.container}
        >
            {data.map((source: CardDataInterface) => (
                <SwiperCard key={source.name} card={source} />
            ))}
        </ViewPager>
    );
};
