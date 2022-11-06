import { useCallback, useMemo } from 'react';
import { LayoutChangeEvent } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';

export const useGetTabBarHeight = (): {
    onLayout: (event: LayoutChangeEvent) => void;
    tabBarHeight: number;
} => {
    const height = useSharedValue(0);

    const onLayout = useCallback(
        (event: LayoutChangeEvent) => {
            if (height.value === 0) {
                height.value = event.nativeEvent.layout.height - 10;
            }
        },
        [height]
    );

    const tabBarHeight = useMemo((): number => height.value, [height.value]);

    return { onLayout, tabBarHeight };
};
