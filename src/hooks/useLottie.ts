import { Ref, useCallback, useRef } from 'react';
import LottieView from 'lottie-react-native';

export const useLottie = (
    start: number,
    end: number
): {
    lottieRef: Ref<LottieView>;
    lottieReset: () => void;
    lottiePlay: () => void;
} => {
    const lottieRef = useRef<LottieView>(null);

    const lottieReset = useCallback(() => {
        lottieRef.current.reset();
    }, []);

    const lottiePlay = useCallback(() => {
        lottieReset();
        lottieRef.current.play(start, end);
    }, [end, lottieReset, start]);

    return { lottieRef, lottieReset, lottiePlay };
};
