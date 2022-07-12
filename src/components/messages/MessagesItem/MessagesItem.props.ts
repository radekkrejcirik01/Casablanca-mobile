import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';

export interface MessagesItemProps {
    item: CardDataProps;
    onPress: (item: CardDataProps) => void;
}
