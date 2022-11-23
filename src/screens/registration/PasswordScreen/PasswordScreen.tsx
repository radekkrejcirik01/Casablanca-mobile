import React, { createRef, useCallback } from 'react';
import { Alert, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '@components/icon/Icon';
import { IconEnum } from '@components/icon/Icon.enum';
import { InputTypeEnum } from '@components/general/Input/Input.enum';
import { Input } from '@components/general/Input/Input';
import { Title } from '@components/general/Title/Title';
import { setPasswordAction, setUserToken } from '@store/UserReducer';
import { ReducerProps } from '@store/index.props';
import { PasswordScreenStyle } from '@screens/registration/PasswordScreen/PasswordScreen.style';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { useNavigation } from '@hooks/useNavigation';
import { postRequest } from '@utils/Axios/Axios.service';
import { PersistStorage } from '@utils/PersistStorage/PersistStorage';
import { PersistStorageKeys } from '@utils/PersistStorage/PersistStorage.enum';
import {
    RegistrationInterface,
    ResponseInterface
} from '@models/Registration/Registration.interface';
import { ContinueButton } from '@components/registration/ContinueButton/ContinueButton';

export const PasswordScreen = (): JSX.Element => {
    const registration = useSelector((state: ReducerProps) => state.user);
    const dispatch = useDispatch();

    const input = createRef<TextInput>();

    useNavigation(RootStackNavigatorEnum.RegistrationStack, () =>
        input.current?.focus()
    );

    const onChange = useCallback(
        (value: string) => dispatch(setPasswordAction(value)),
        [dispatch]
    );

    const register = useCallback(() => {
        postRequest<ResponseInterface, RegistrationInterface>(
            'https://w2gdfxt8dc.execute-api.eu-central-1.amazonaws.com/user/register',
            registration
        ).subscribe((response: ResponseInterface) => {
            if (response?.status) {
                dispatch(setUserToken(registration.email));
                PersistStorage.setItem(
                    PersistStorageKeys.TOKEN,
                    registration.email
                ).catch();
            }
        });
    }, [dispatch, registration]);

    const continuePressed = useCallback(() => {
        if (registration.password.length > 7) {
            register();
        } else if (!registration.password) {
            Alert.alert('Please type password');
        } else {
            Alert.alert(
                'Password is too short, safer would be at least 8 characters'
            );
        }
    }, [register, registration.password]);

    return (
        <>
            <Title title="Password" style={PasswordScreenStyle.title} />
            <Input
                ref={input}
                inputType={InputTypeEnum.PASSWORD}
                autoFocus
                onChange={onChange}
                value={registration.password}
                iconRight={<Icon name={IconEnum.PROFILE} size={25} />}
                viewStyle={PasswordScreenStyle.input}
            />
            <ContinueButton onPress={continuePressed} />
        </>
    );
};
