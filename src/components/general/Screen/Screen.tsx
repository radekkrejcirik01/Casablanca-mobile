import React, { useMemo } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { hasNotch } from 'react-native-device-info';
import {
    SafeAreaView,
    SafeAreaViewProps,
    useSafeAreaInsets
} from 'react-native-safe-area-context';
import { ScreenStyle } from '@components/general/Screen/Screen.style';

export const Screen = ({ style, ...props }: SafeAreaViewProps): JSX.Element => {
    const { top } = useSafeAreaInsets();

    const viewStyle = useMemo(
        (): StyleProp<ViewStyle> => [
            ScreenStyle.container,
            !hasNotch() && { paddingTop: top - 10 },
            style
        ],
        [style, top]
    );

    return <SafeAreaView style={viewStyle} {...props} />;
};
