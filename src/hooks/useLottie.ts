import { Ref, useCallback, useRef } from 'react';
import { AnimatedLottieViewInterface } from '@components/swipe/SwiperCard/SwiperCard.props';

export const useLottie = (): {
    lottieRef: Ref<AnimatedLottieViewInterface>;
    lottieReset: () => void;
    lottiePlay: () => void;
} => {
    const lottieRef = useRef<AnimatedLottieViewInterface>(null);

    const lottieReset = useCallback(() => {
        lottieRef.current.reset(0);
    }, []);

    const lottiePlay = useCallback(() => {
        lottieReset();
        lottieRef.current.play(2, 75);
    }, [lottieReset]);

    return { lottieRef, lottieReset, lottiePlay };
};
