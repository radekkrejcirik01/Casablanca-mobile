import React, { useCallback } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Continue } from '@components/registration/Continue/Continue';
import { Title } from '@components/general/Title/Title';
import { GenderScreenStyle } from '@screens/registration/GenderScreen/GenderScreen.style';
import { GenderSelect } from '@components/registration/GenderSelect/GenderSelect';
import { ReducerProps } from '@store/index.props';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { useNavigation } from '@hooks/useNavigation';
import { RegistrationStackNavigatorEnum } from '@navigation/StackNavigators/registration/RegistrationStackNavigator.enum';
import { setGenderAction } from '@store/RegistrationReducer';

export const GenderScreen = (): JSX.Element => {
    const gender = useSelector(
        (state: ReducerProps) => state.registration.gender
    );
    const dispatch = useDispatch();

    const { navigateTo } = useNavigation(
        RootStackNavigatorEnum.RegistrationStack
    );

    const onSelect = useCallback(
        (value: string) => {
            dispatch(setGenderAction(value));
        },
        [dispatch]
    );

    const continuePressed = () => {
        if (gender) {
            navigateTo(RegistrationStackNavigatorEnum.ShowMeScreen);
        } else {
            Alert.alert('Please select option');
        }
    };

    return (
        <SafeAreaProvider>
            <Title title="I am" />
            <GenderSelect
                gender={gender}
                onSelect={onSelect}
                style={GenderScreenStyle.select}
            />
            <Continue onPress={continuePressed} />
        </SafeAreaProvider>
    );
};
