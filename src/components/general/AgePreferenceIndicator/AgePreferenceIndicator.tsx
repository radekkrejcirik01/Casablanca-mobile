import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import { AgePreferenceIndicatorProps } from '@components/general/AgePreferenceIndicator/AgePreferenceIndicator.props';
import { AgePreferenceIndicatorStyle } from '@components/general/AgePreferenceIndicator/AgePreferenceIndicator.style';
import { PointView } from '@components/general/PointView/PointView';

export const AgePreferenceIndicator = ({
    agePreferenceValue,
    onValueChange
}: AgePreferenceIndicatorProps): JSX.Element => {
    const [minimumValue, setMinimumValue] = useState<number>();
    const [maximumValue, setMaximumValue] = useState<number>();

    useEffect(() => {
        let array = Array(2).fill(agePreferenceValue);
        if (agePreferenceValue?.includes('-')) {
            array = agePreferenceValue.split('-');
        }
        setMinimumValue(Number(array[0]));
        setMaximumValue(Number(array[1]));
    }, [agePreferenceValue]);

    const valuesEqual = useMemo(
        (): boolean => minimumValue === maximumValue,
        [maximumValue, minimumValue]
    );

    useEffect(() => {
        if (minimumValue && maximumValue) {
            let value = `${minimumValue}-${maximumValue}`;
            if (valuesEqual) {
                value = minimumValue?.toString();
            }
            onValueChange(value);
        }
    }, [maximumValue, minimumValue, onValueChange, valuesEqual]);

    const TextView = useCallback(
        (): JSX.Element => (
            <View style={AgePreferenceIndicatorStyle.textContainer}>
                <Text
                    style={[
                        AgePreferenceIndicatorStyle.text,
                        AgePreferenceIndicatorStyle.textContainerLeft,
                        valuesEqual &&
                            AgePreferenceIndicatorStyle.textAlignCenter
                    ]}
                >
                    {minimumValue}
                </Text>
                {!valuesEqual && (
                    <Text style={AgePreferenceIndicatorStyle.text}>-</Text>
                )}
                {!valuesEqual && (
                    <Text
                        style={[
                            AgePreferenceIndicatorStyle.text,
                            AgePreferenceIndicatorStyle.textContainerRight
                        ]}
                    >
                        {maximumValue}
                    </Text>
                )}
            </View>
        ),
        [maximumValue, minimumValue, valuesEqual]
    );

    const pressMinimumMinus = useCallback(() => {
        if (minimumValue > 18) {
            setMinimumValue(minimumValue - 1);
        }
    }, [minimumValue]);

    const pressMinimumPlus = useCallback(() => {
        if (minimumValue < maximumValue) {
            setMinimumValue(minimumValue + 1);
        }
    }, [maximumValue, minimumValue]);

    const pressMaximumMinus = useCallback(() => {
        if (maximumValue > minimumValue) {
            setMaximumValue(maximumValue - 1);
        }
    }, [maximumValue, minimumValue]);

    const pressMaximumPlus = useCallback(
        () => setMaximumValue(maximumValue + 1),
        [maximumValue]
    );

    return (
        <View>
            <TextView />
            <View style={AgePreferenceIndicatorStyle.pointContainer}>
                <PointView
                    onPressMinus={pressMinimumMinus}
                    onPressPlus={pressMinimumPlus}
                />
                <PointView
                    onPressMinus={pressMaximumMinus}
                    onPressPlus={pressMaximumPlus}
                />
            </View>
        </View>
    );
};
