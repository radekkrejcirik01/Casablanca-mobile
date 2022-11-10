import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DistanceScreenStyle } from '@screens/profile/settings/DistanceScreen/DistanceScreen.style';
import { DistanceIndicator } from '@components/general/DistanceIndicator/DistanceIndicator';

export const DistanceScreen = (): JSX.Element => {
    const [distance, setDistance] = useState<number>();

    const onChange = (value: number) => {
        setDistance(value);
    };

    return (
        <SafeAreaProvider>
            <ScrollView contentContainerStyle={DistanceScreenStyle.container}>
                <DistanceIndicator onChange={onChange} />
                <Text style={DistanceScreenStyle.description}>
                    The distance of the users that appear in the discovery 🌍
                </Text>
            </ScrollView>
        </SafeAreaProvider>
    );
};
