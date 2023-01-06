import { StyleProp, ViewStyle } from 'react-native';
import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';
import { SwiperCardEnum } from '@components/swipe/SwiperCard/SwiperCard.enum';

export interface SwiperCardProps {
    card: CardDataProps;
    cardIndex?: number;
    onCardTouch?: (name: string) => void;
    hasLike?: boolean;
    performLike?: (user: string, value: SwiperCardEnum) => void;
    style?: StyleProp<ViewStyle>;
}

export const SwiperCardDefaultProps: Omit<SwiperCardProps, 'card'> = {
    cardIndex: 0,
    onCardTouch: (name: string) => {},
    hasLike: true,
    performLike: (user: string, value: SwiperCardEnum) => {},
    style: {}
};
