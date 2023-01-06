import React, { useCallback } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Title } from '@components/general/Title/Title';
import { BirthdayScreenStyle } from '@screens/registration/BirthdayScreen/BirthdayScreen.style';
import { BirthdayInput } from '@components/registration/BirthdayInput/BirthdayInput';
import { getAge } from '@functions/getAge';
import { ReducerProps } from '@store/index.props';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { RegistrationStackNavigatorEnum } from '@navigation/StackNavigators/registration/RegistrationStackNavigator.enum';
import { useNavigation } from '@hooks/useNavigation';
import { setBirthdayAction } from '@store/UserReducer';
import { ContinueButton } from '@components/registration/ContinueButton/ContinueButton';

export const BirthdayScreen = (): JSX.Element => {
    const birthday = useSelector((state: ReducerProps) => state.birthday);
    const dispatch = useDispatch();

    const { navigateTo } = useNavigation(
        RootStackNavigatorEnum.RegistrationStack
    );

    const continuePressed = useCallback(() => {
        const birthdayValue = `${birthday.year}-${birthday.month}-${birthday.day}`;

        if (!getAge(birthdayValue)) {
            Alert.alert('Sorry, invalid birthday');
        } else if (getAge(birthdayValue) > 17) {
            dispatch(setBirthdayAction(birthdayValue));
            navigateTo(RegistrationStackNavigatorEnum.PhotosScreen);
        } else {
            Alert.alert('Sorry, Casablanca is only for people older 18');
        }
    }, [birthday.day, birthday.month, birthday.year, dispatch, navigateTo]);

    return (
        <>
            <Title
                title="When is your birthday?"
                style={BirthdayScreenStyle.title}
            />
            <BirthdayInput
                birthday={birthday}
                style={BirthdayScreenStyle.input}
            />
            <ContinueButton onPress={continuePressed} />
        </>
    );
};
