import { StyleProp } from 'react-native';
import LottieView from 'lottie-react-native';
import { ImageStyle } from 'react-native-fast-image';
import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';

export interface SwiperCardProps {
    card: CardDataProps;
    cardStyle?: StyleProp<ImageStyle>;
}

export interface AnimatedLottieViewInterface extends LottieView {
    play(startFrame?: number, endFrame?: number): void;
    reset(startFrame?: number): void;
}
