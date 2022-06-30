import { StyleProp } from 'react-native';
import { CardDataInterface } from '@components/swipe/Swiper/Swiper.props';
import LottieView from 'lottie-react-native';
import { ImageStyle } from 'react-native-fast-image';

export interface SwiperCardProps {
    card: CardDataInterface;
    cardStyle?: StyleProp<ImageStyle>;
}

export interface AnimatedLottieViewInterface extends LottieView {
    play(startFrame?: number, endFrame?: number): void;
    reset(startFrame?: number): void;
}
