import ReactNativeHapticFeedback, {
    HapticFeedbackTypes
} from 'react-native-haptic-feedback';

export const useHaptic = (): {
    hapticTouch: (type: HapticFeedbackTypes) => void;
} => {
    const hapticOptions: ReactNativeHapticFeedback.HapticOptions = {
        enableVibrateFallback: true,
        ignoreAndroidSystemSettings: false
    };

    const hapticTouch = (type: HapticFeedbackTypes) => {
        ReactNativeHapticFeedback.trigger(type, hapticOptions);
    };

    return { hapticTouch };
};
