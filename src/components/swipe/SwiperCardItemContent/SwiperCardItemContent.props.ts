import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';

export interface SwiperCardItemContentProps {
    index: number;
    item: CardDataProps;
    pressedContent: boolean;
}
