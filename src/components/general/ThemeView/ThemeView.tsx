import React, { useMemo } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import COLORS from '@constants/COLORS';
import { useTheme } from '@hooks/useTheme';
import {
    ThemeViewDefaultProps,
    ThemeViewProps
} from '@components/general/ThemeView/ThemeView.props';

export const ThemeView = ({
    isDefault,
    style,
    ...props
}: ThemeViewProps): JSX.Element => {
    const { isDarkMode } = useTheme();

    const defaultColorLight = useMemo(
        (): string => (isDefault ? COLORS.MAIN_BLUE : COLORS.WHITE),
        [isDefault]
    );

    const defaultColorDark = useMemo(
        (): string => (isDefault ? COLORS.BLACK : COLORS.MAIN_BLUE),
        [isDefault]
    );

    const backgroundColor = useMemo(
        (): StyleProp<ViewStyle> => ({
            backgroundColor: isDarkMode ? defaultColorDark : defaultColorLight
        }),
        [defaultColorDark, defaultColorLight, isDarkMode]
    );

    return <View style={[style, backgroundColor]} {...props} />;
};

ThemeView.defaultProps = ThemeViewDefaultProps;
