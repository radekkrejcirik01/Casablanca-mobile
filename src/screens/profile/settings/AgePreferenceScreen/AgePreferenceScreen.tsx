import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AgePreferenceIndicator } from '@components/general/AgePreferenceIndicator/AgePreferenceIndicator';
import { AgePreferenceScreenStyle } from '@screens/profile/settings/AgePreferenceScreen/AgePreferenceScreen.style';
import { ReducerProps } from '@store/index.props';
import { setSaveVisible } from '@store/SaveReducer';
import { updateRequest } from '@utils/Axios/Axios.service';
import {
    AgePreferenceInterface,
    ResponseInterface
} from '@models/Registration/Registration.interface';
import { setAgePreferenceAction } from '@store/UserReducer';

export const AgePreferenceScreen = (): JSX.Element => {
    const { agePreference, email } = useSelector(
        (state: ReducerProps) => state.user
    );
    const isVisible = useSelector(
        (state: ReducerProps) => state.save.isVisible
    );
    const dispatch = useDispatch();

    const [agePreferenceValue, setAgePreferenceValue] =
        useState<string>(agePreference);

    useEffect(() => {
        dispatch(setSaveVisible(false));
    }, [dispatch]);

    const saveAgePreference = useCallback(() => {
        updateRequest<ResponseInterface, AgePreferenceInterface>(
            'user/agePreference/update',
            {
                email,
                agePreference: agePreferenceValue
            }
        ).subscribe();

        dispatch(setAgePreferenceAction(agePreferenceValue));
    }, [agePreferenceValue, dispatch, email]);

    useEffect(() => {
        if (!isVisible && agePreferenceValue !== agePreference) {
            saveAgePreference();
        }
    }, [agePreference, agePreferenceValue, isVisible, saveAgePreference]);

    const onValueChange = useCallback(
        (value: string) => {
            setAgePreferenceValue(value);
            if (value !== agePreference) {
                dispatch(setSaveVisible(true));
            } else {
                dispatch(setSaveVisible(false));
            }
        },
        [agePreference, dispatch]
    );

    return (
        <SafeAreaProvider style={AgePreferenceScreenStyle.container}>
            <ScrollView>
                <AgePreferenceIndicator
                    agePreferenceValue={agePreference}
                    onValueChange={onValueChange}
                />
                <Text style={AgePreferenceScreenStyle.description}>
                    The age preference of the users that appear in the discovery
                </Text>
            </ScrollView>
        </SafeAreaProvider>
    );
};
