import React, { useMemo } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { hasNotch } from 'react-native-device-info';
import {
    SafeAreaView,
    useSafeAreaInsets
} from 'react-native-safe-area-context';
import { ScreenStyle } from '@components/general/Screen/Screen.style';
import {
    ScreenDefaultProps,
    ScreenProps
} from '@components/general/Screen/Screen.props';

export const Screen = ({
    isModalScreen,
    style,
    ...props
}: ScreenProps): JSX.Element => {
    const { top } = useSafeAreaInsets();

    const viewStyle = useMemo(
        (): StyleProp<ViewStyle> => [
            ScreenStyle.container,
            !hasNotch() && { paddingTop: top - 10 },
            isModalScreen && { marginTop: top },
            style
        ],
        [isModalScreen, style, top]
    );

    return <SafeAreaView style={viewStyle} {...props} />;
};

Screen.defaultProps = ScreenDefaultProps;
