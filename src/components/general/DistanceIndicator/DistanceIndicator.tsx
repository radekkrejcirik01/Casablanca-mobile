import React, { useCallback, useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { DistanceIndicatorProps } from '@components/general/DistanceIndicator/DistanceIndicator.props';
import { DistanceIndicatorStyle } from '@components/general/DistanceIndicator/DistanceIndicator.style';

export const DistanceIndicator = ({
    onChange
}: DistanceIndicatorProps): JSX.Element => {
    const [distance, setDistance] = useState<number>(100);

    const onValueChange = useCallback(
        (value: number) => {
            onChange(value);
            setDistance(value);
        },
        [onChange]
    );

    const pressMinus = useCallback(() => {
        if (distance > 100) {
            onValueChange(distance - 50);
            return;
        }
        if (distance > 10) {
            onValueChange(distance - 10);
            return;
        }
        if (distance > 1) {
            onValueChange(distance - 1);
        }
    }, [distance, onValueChange]);

    const pressPlus = useCallback(() => {
        if (distance >= 100) {
            onValueChange(distance + 50);
            return;
        }
        if (distance >= 10) {
            onValueChange(distance + 10);
            return;
        }
        if (distance >= 1) {
            onValueChange(distance + 1);
        }
    }, [distance, onValueChange]);

    const disabled = useMemo((): boolean => distance === 1, [distance]);

    return (
        <View>
            <Text style={DistanceIndicatorStyle.distanceText}>
                {distance} km
            </Text>
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
