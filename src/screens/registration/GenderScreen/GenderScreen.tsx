import React, { useCallback } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Title } from '@components/general/Title/Title';
import { GenderScreenStyle } from '@screens/registration/GenderScreen/GenderScreen.style';
import { GenderSelect } from '@components/registration/GenderSelect/GenderSelect';
import { ReducerProps } from '@store/index.props';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { useNavigation } from '@hooks/useNavigation';
import { RegistrationStackNavigatorEnum } from '@navigation/StackNavigators/registration/RegistrationStackNavigator.enum';
import { setGenderAction } from '@store/UserReducer';
import { ContinueButton } from '@components/registration/ContinueButton/ContinueButton';

export const GenderScreen = (): JSX.Element => {
    const gender = useSelector((state: ReducerProps) => state.user.gender);
    const dispatch = useDispatch();

    const { navigateTo } = useNavigation(
        RootStackNavigatorEnum.RegistrationStack
    );

    const onSelect = useCallback(
        (value: number) => {
            dispatch(setGenderAction(value));
        },
        [dispatch]
    );

    const continuePressed = useCallback(() => {
        // 'null' specific
        if (gender !== null) {
            navigateTo(RegistrationStackNavigatorEnum.ShowMeScreen);
        } else {
            Alert.alert('Please select some option');
        }
    }, [gender, navigateTo]);

    return (
        <>
            <Title title="I am" style={GenderScreenStyle.title} />
            <GenderSelect
                gender={gender}
                onSelect={onSelect}
                style={GenderScreenStyle.select}
            />
            <ContinueButton onPress={continuePressed} />
        </>
    );
};
