import { StyleProp, ViewStyle } from 'react-native';
import LottieView from 'lottie-react-native';
import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';

export interface SwiperCardProps {
    card: CardDataProps;
    onCardTouch?: (name: string) => void;
    hasLike?: boolean;
    style?: StyleProp<ViewStyle>;
}

export const SwiperCardDefaultProps: Omit<SwiperCardProps, 'card'> = {
    onCardTouch: () => {},
    hasLike: true,
    style: {}
};

export interface AnimatedLottieViewInterface extends LottieView {
    play(startFrame?: number, endFrame?: number): void;
    reset(startFrame?: number): void;
}
