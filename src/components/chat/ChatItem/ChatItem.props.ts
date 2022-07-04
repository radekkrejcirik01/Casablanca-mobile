import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';

export interface ChatItemProps {
    item: CardDataProps;
    onPress: (item: CardDataProps) => void;
}
