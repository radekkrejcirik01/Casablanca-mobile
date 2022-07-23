import React, { useMemo, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { DistanceScreenStyle } from '@screens/profile/DistanceScreen/DistanceScreen.style';

export const DistanceScreen = (): JSX.Element => {
    const [distance, setDistance] = useState<number>(100);

    const pressMinus = () => {
        if (distance > 100) {
            setDistance(distance - 50);
            return;
        }
        if (distance > 10) {
            setDistance(distance - 10);
            return;
        }
        if (distance > 1) {
            setDistance(distance - 1);
        }
    };

    const pressPlus = () => {
        if (distance >= 100) {
            setDistance(distance + 50);
            return;
        }
        if (distance >= 10) {
            setDistance(distance + 10);
            return;
        }
        if (distance >= 1) {
            setDistance(distance + 1);
        }
    };

    const disabled = useMemo((): boolean => distance === 1, [distance]);

    return (
        <SafeAreaProvider>
            <ScrollView>
                <Text style={DistanceScreenStyle.distanceText}>
                    {distance} km
                </Text>
                <View style={DistanceScreenStyle.pointView}>
                    <TouchableOpacity onPress={pressMinus} disabled={disabled}>
                        <Text style={DistanceScreenStyle.pointText}>👈</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={pressPlus}>
                        <Text style={DistanceScreenStyle.pointText}>👉</Text>
                    </TouchableOpacity>
                </View>
                <Text style={DistanceScreenStyle.description}>
                    The distance of the users that appear in the search 🌍
                </Text>
            </ScrollView>
        </SafeAreaProvider>
    );
};
