import React, { createRef, useCallback } from 'react';
import { Alert, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Icon } from '@components/icon/Icon';
import { IconEnum } from '@components/icon/Icon.enum';
import { InputTypeEnum } from '@components/general/Input/Input.enum';
import { Input } from '@components/general/Input/Input';
import { Continue } from '@components/registration/Continue/Continue';
import { Title } from '@components/general/Title/Title';
import { setPasswordAction } from '@store/RegistrationReducer';
import { ReducerProps } from '@store/index.props';
import { PasswordScreenStyle } from '@screens/registration/PasswordScreen/PasswordScreen.style';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { useNavigation } from '@hooks/useNavigation';
import { setUserToken } from '@store/UserReducer';

export const PasswordScreen = (): JSX.Element => {
    const password = useSelector(
        (state: ReducerProps) => state.registration.password
    );
    const dispatch = useDispatch();

    const input = createRef<TextInput>();

    useNavigation(RootStackNavigatorEnum.RegistrationStack, () =>
        input.current?.focus()
    );

    const onChange = useCallback(
        (value: string) => dispatch(setPasswordAction(value)),
        [dispatch]
    );

    const continuePressed = () => {
        if (password.length > 7) {
            dispatch(setUserToken('radek'));
        } else if (!password) {
            Alert.alert('Please type password');
        } else {
            Alert.alert(
                'Password is too short, safer would be at least 8 characters'
            );
        }
    };

    return (
        <SafeAreaProvider>
            <Title title="Password" />
            <Input
                ref={input}
                inputType={InputTypeEnum.PASSWORD}
                autoFocus
                onChange={onChange}
                iconRight={<Icon name={IconEnum.PROFILE} size={25} />}
                viewStyle={PasswordScreenStyle.input}
            />
            <Continue onPress={continuePressed} />
        </SafeAreaProvider>
    );
};
