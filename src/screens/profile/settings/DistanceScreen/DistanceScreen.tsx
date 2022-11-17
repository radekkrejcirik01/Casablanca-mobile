import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DistanceScreenStyle } from '@screens/profile/settings/DistanceScreen/DistanceScreen.style';
import { DistanceIndicator } from '@components/general/DistanceIndicator/DistanceIndicator';
import { ReducerProps } from '@store/index.props';
import { setSaveVisible } from '@store/SaveReducer';
import { setDistanceAction } from '@store/UserReducer';
import { updateRequest } from '@utils/Axios/Axios.service';
import {
    DistanceInterface,
    ResponseInterface
} from '@models/Registration/Registration.interface';

export const DistanceScreen = (): JSX.Element => {
    const { distance, email } = useSelector(
        (state: ReducerProps) => state.user
    );
    const isVisible = useSelector(
        (state: ReducerProps) => state.save.isVisible
    );
    const dispatch = useDispatch();

    const [distanceValue, setDistanceValue] = useState<number>(distance);

    useEffect(() => {
        dispatch(setSaveVisible(false));
    }, [dispatch]);

    const saveDistance = useCallback(() => {
        updateRequest<ResponseInterface, DistanceInterface>(
            'user/distance/update',
            {
                email,
                distance: distanceValue
            }
        ).subscribe();

        dispatch(setDistanceAction(distanceValue));
    }, [dispatch, distanceValue, email]);

    useEffect(() => {
        if (!isVisible && distanceValue !== distance) {
            saveDistance();
        }
    }, [distance, distanceValue, isVisible, saveDistance]);

    const onValueChange = (value: number) => {
        setDistanceValue(value);
        if (value !== distance) {
            dispatch(setSaveVisible(true));
        } else {
            dispatch(setSaveVisible(false));
        }
    };

    return (
        <SafeAreaProvider>
            <ScrollView contentContainerStyle={DistanceScreenStyle.container}>
                <DistanceIndicator
                    distanceValue={distanceValue}
                    onValueChange={onValueChange}
                />
                <Text style={DistanceScreenStyle.description}>
                    The distance of the users that appear in the discovery 🌍
                </Text>
            </ScrollView>
        </SafeAreaProvider>
    );
};
