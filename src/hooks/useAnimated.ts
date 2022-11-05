import { useCallback } from 'react';
import { Animated } from 'react-native';
import Value = Animated.Value;
import ValueXY = Animated.ValueXY;

export const useAnimated = (
    value: Value | ValueXY
): {
    animationCallback: (toValue: number) => void;
} => {
    const animationCallback = useCallback(
        (toValue: number) => {
            Animated.timing(value, {
                toValue,
                duration: 250,
                useNativeDriver: false
            }).start();
        },
        [value]
    );

    return { animationCallback };
};
