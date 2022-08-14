import React, { useCallback } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import {
    DotProgressBarDefaultProps,
    DotProgressBarProps
} from '@components/general/DotProgressBar/DotProgressBar.props';
import COLORS from '@constants/COLORS';
import { DotProgressBarStyle } from '@components/general/DotProgressBar/DotProgressBar.style';

export const DotProgressBar = ({
    pagesNumber,
    currentPage,
    style
}: DotProgressBarProps): JSX.Element => {
    const pageArray = [...Array(pagesNumber).keys()];

    const dotColor = useCallback(
        (value: number): StyleProp<ViewStyle> => ({
            backgroundColor:
                value === currentPage ? COLORS.WHITE : COLORS.LIGHTGRAY_300
        }),
        [currentPage]
    );

    return (
        <View style={[DotProgressBarStyle.container, style]}>
            {pageArray.map((value: number) => (
                <View
                    key={value}
                    style={[DotProgressBarStyle.dot, dotColor(value)]}
                />
            ))}
        </View>
    );
};

DotProgressBar.defaultProps = DotProgressBarDefaultProps;
