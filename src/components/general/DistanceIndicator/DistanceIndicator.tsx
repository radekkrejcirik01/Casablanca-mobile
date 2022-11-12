import React, { useCallback, useMemo } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { DistanceIndicatorProps } from '@components/general/DistanceIndicator/DistanceIndicator.props';
import { DistanceIndicatorStyle } from '@components/general/DistanceIndicator/DistanceIndicator.style';

export const DistanceIndicator = ({
    distanceValue,
    onValueChange
}: DistanceIndicatorProps): JSX.Element => {
    const text = useMemo((): string => `${distanceValue} km`, [distanceValue]);

    const pressMinus = useCallback(() => {
        if (distanceValue > 100) {
            onValueChange(distanceValue - 50);
            return;
        }
        if (distanceValue > 10) {
            onValueChange(distanceValue - 10);
            return;
        }
        if (distanceValue > 1) {
            onValueChange(distanceValue - 1);
        }
    }, [distanceValue, onValueChange]);

    const pressPlus = useCallback(() => {
        if (distanceValue >= 100) {
            onValueChange(distanceValue + 50);
            return;
        }
        if (distanceValue >= 10) {
            onValueChange(distanceValue + 10);
            return;
        }
        if (distanceValue >= 1) {
            onValueChange(distanceValue + 1);
        }
    }, [distanceValue, onValueChange]);

    const disabled = useMemo(
        (): boolean => distanceValue === 1,
        [distanceValue]
    );

    return (
        <View>
            <Text style={DistanceIndicatorStyle.distanceText}>{text}</Text>
            <View style={DistanceIndicatorStyle.pointView}>
                <TouchableOpacity onPress={pressMinus} disabled={disabled}>
                    <Text style={DistanceIndicatorStyle.pointText}>👈</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={pressPlus}>
                    <Text style={DistanceIndicatorStyle.pointText}>👉</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
