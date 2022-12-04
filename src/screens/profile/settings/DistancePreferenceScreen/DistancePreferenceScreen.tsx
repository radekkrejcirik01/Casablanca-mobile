import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DistancePreferenceScreenStyle } from '@screens/profile/settings/DistancePreferenceScreen/DistancePreferenceScreen.style';
import { DistancePreferenceIndicator } from '@components/general/DistancePreferenceIndicator/DistancePreferenceIndicator';
import { ReducerProps } from '@store/index.props';
import { setSaveVisible } from '@store/SaveReducer';
import { setDistancePreferenceAction } from '@store/UserReducer';
import { updateRequest } from '@utils/Axios/Axios.service';
import {
    DistancePreferenceInterface,
    ResponseInterface
} from '@models/Registration/Registration.interface';

export const DistancePreferenceScreen = (): JSX.Element => {
    const { distancePreference, email } = useSelector(
        (state: ReducerProps) => state.user
    );
    const isVisible = useSelector(
        (state: ReducerProps) => state.save.isVisible
    );
    const dispatch = useDispatch();

    const [distancePreferenceValue, setDistancePreferenceValue] =
        useState<number>(distancePreference);

    useEffect(() => {
        dispatch(setSaveVisible(false));
    }, [dispatch]);

    const saveDistance = useCallback(() => {
        updateRequest<ResponseInterface, DistancePreferenceInterface>(
            'user/distancePreference/update',
            {
                email,
                distancePreference: distancePreferenceValue
            }
        ).subscribe();

        dispatch(setDistancePreferenceAction(distancePreferenceValue));
    }, [dispatch, distancePreferenceValue, email]);

    useEffect(() => {
        if (!isVisible && distancePreferenceValue !== distancePreference) {
            saveDistance();
        }
    }, [distancePreference, distancePreferenceValue, isVisible, saveDistance]);

    const onValueChange = (value: number) => {
        setDistancePreferenceValue(value);
        if (value !== distancePreference) {
            dispatch(setSaveVisible(true));
        } else {
            dispatch(setSaveVisible(false));
        }
    };

    return (
        <SafeAreaProvider>
            <ScrollView
                contentContainerStyle={DistancePreferenceScreenStyle.container}
            >
                <DistancePreferenceIndicator
                    distancePreferenceValue={distancePreferenceValue}
                    onValueChange={onValueChange}
                />
                <Text style={DistancePreferenceScreenStyle.description}>
                    The distance of the users that appear in the discovery 🌍
                </Text>
            </ScrollView>
        </SafeAreaProvider>
    );
};
