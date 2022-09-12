import { Ref, useCallback, useRef, useState } from 'react';
import LottieView from 'lottie-react-native';

export const useLottie = (
    start: number,
    end: number
): {
    lottieRef: Ref<LottieView>;
    lottieReset: () => void;
    lottiePlay: () => void;
    isLottieActive: boolean;
} => {
    const [isLottieActive, setIsLottieActive] = useState<boolean>(false);

    const lottieRef = useRef<LottieView>(null);

    const lottieReset = useCallback(() => {
        lottieRef.current.reset();
        setIsLottieActive(false);
    }, []);

    const lottiePlay = useCallback(() => {
        lottieReset();
        lottieRef.current.play(start, end);
        setIsLottieActive(true);
    }, [end, lottieReset, start]);

    return { lottieRef, lottieReset, lottiePlay, isLottieActive };
};
