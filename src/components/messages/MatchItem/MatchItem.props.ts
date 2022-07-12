import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';

export interface MatchItemProps {
    item: CardDataProps;
    onPress: (item: CardDataProps) => void;
}
