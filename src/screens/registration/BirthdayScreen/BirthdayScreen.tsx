import React, { useCallback } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Continue } from '@components/registration/Continue/Continue';
import { Title } from '@components/general/Title/Title';
import { BirthdayScreenStyle } from '@screens/registration/BirthdayScreen/BirthdayScreen.style';
import { BirthdayInput } from '@components/registration/BirthdayInput/BirthdayInput';
import { getAge } from '@functions/getAge';
import { ReducerProps } from '@store/index.props';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { RegistrationStackNavigatorEnum } from '@navigation/StackNavigators/registration/RegistrationStackNavigator.enum';
import { useNavigation } from '@hooks/useNavigation';
import { setBirthdayValueAction } from '@store/RegistrationReducer';

export const BirthdayScreen = (): JSX.Element => {
    const birthday = useSelector(
        (state: ReducerProps) => state.registration.birthday
    );
    const dispatch = useDispatch();

    const { navigateTo } = useNavigation(
        RootStackNavigatorEnum.RegistrationStack
    );

    const continuePressed = useCallback(() => {
        const birthdayValue = `${birthday.year}/${birthday.month}/${birthday.day}`;
        dispatch(setBirthdayValueAction(birthdayValue));

        if (getAge(birthdayValue) >= 18) {
            navigateTo(RegistrationStackNavigatorEnum.PhotosScreen);
        }
        if (getAge(birthdayValue) < 18) {
            Alert.alert('Sorry, Casablanca is only for people older 18');
        }
        if (!getAge(birthdayValue)) {
            Alert.alert('Sorry, invalid birthday');
        }
    }, [birthday.day, birthday.month, birthday.year, dispatch, navigateTo]);

    return (
        <SafeAreaProvider>
            <Title title="When is your birthday?" />
            <BirthdayInput
                birthday={birthday}
                style={BirthdayScreenStyle.input}
            />
            <Continue onPress={continuePressed} />
        </SafeAreaProvider>
    );
};
