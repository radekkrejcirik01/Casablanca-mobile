import LottieView from 'lottie-react-native';
import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';

export interface SwiperCardProps {
    card: CardDataProps;
    onCardTouch: (name: string) => void;
    onInfoTouch: (image: Array<string>, name: string, age: string) => void;
}

export interface AnimatedLottieViewInterface extends LottieView {
    play(startFrame?: number, endFrame?: number): void;
    reset(startFrame?: number): void;
}
