import { StyleProp, ViewStyle } from 'react-native';
import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';

export interface SwiperCardProps {
    card: CardDataProps;
    cardIndex?: number;
    onCardTouch?: (name: string) => void;
    hasLike?: boolean;
    style?: StyleProp<ViewStyle>;
}

export const SwiperCardDefaultProps: Omit<SwiperCardProps, 'card'> = {
    cardIndex: 0,
    onCardTouch: () => {},
    hasLike: true,
    style: {}
};
