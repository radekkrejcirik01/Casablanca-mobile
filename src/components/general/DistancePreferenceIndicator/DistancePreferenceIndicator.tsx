import React, { useCallback, useMemo } from 'react';
import { Text, View } from 'react-native';
import { DistancePreferenceIndicatorProps } from '@components/general/DistancePreferenceIndicator/DistancePreferenceIndicator.props';
import { DistancePreferenceIndicatorStyle } from '@components/general/DistancePreferenceIndicator/DistancePreferenceIndicator.style';
import { PointView } from '@components/general/PointView/PointView';

export const DistancePreferenceIndicator = ({
    distancePreferenceValue,
    onValueChange
}: DistancePreferenceIndicatorProps): JSX.Element => {
    const text = useMemo(
        (): string => `${distancePreferenceValue} km`,
        [distancePreferenceValue]
    );

    const onPressMinus = useCallback(() => {
        if (distancePreferenceValue > 100) {
            onValueChange(distancePreferenceValue - 50);
            return;
        }
        if (distancePreferenceValue > 10) {
            onValueChange(distancePreferenceValue - 10);
            return;
        }
        if (distancePreferenceValue > 1) {
            onValueChange(distancePreferenceValue - 1);
        }
    }, [distancePreferenceValue, onValueChange]);

    const onPressPlus = useCallback(() => {
        if (distancePreferenceValue >= 100) {
            onValueChange(distancePreferenceValue + 50);
            return;
        }
        if (distancePreferenceValue >= 10) {
            onValueChange(distancePreferenceValue + 10);
            return;
        }
        if (distancePreferenceValue >= 1) {
            onValueChange(distancePreferenceValue + 1);
        }
    }, [distancePreferenceValue, onValueChange]);

    return (
        <View>
            <Text style={DistancePreferenceIndicatorStyle.distanceText}>
                {text}
            </Text>
            <View style={DistancePreferenceIndicatorStyle.pointContainer}>
                <PointView
                    onPressMinus={onPressMinus}
                    onPressPlus={onPressPlus}
                />
            </View>
        </View>
    );
};
