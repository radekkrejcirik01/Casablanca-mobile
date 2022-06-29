import { CardDataInterface } from '@components/swipe/Swiper/Swiper.props';
import LottieView from 'lottie-react-native';

export interface SwiperCardProps {
    card: CardDataInterface;
}

export interface AnimatedLottieViewInterface extends LottieView {
    play(startFrame?: number, endFrame?: number): void;
    reset(startFrame?: number): void;
}
