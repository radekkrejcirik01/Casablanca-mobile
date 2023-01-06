import { AnimatedLottieViewProps } from 'lottie-react-native';
import { StyleProp, ViewStyle } from 'react-native';

export interface LottieProps extends AnimatedLottieViewProps {
    onRemoveLike?: () => void;
    isActive?: boolean;
    style?: StyleProp<ViewStyle>;
}

export const LottieDefaultProps: Omit<LottieProps, 'source'> = {
    onRemoveLike: null,
    isActive: false,
    style: {}
};
