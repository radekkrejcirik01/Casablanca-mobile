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
import { EmailScreenStyle } from '@screens/registration/EmailScreen/EmailScreen.style';
import { setEmailAction } from '@store/RegistrationReducer';
import { ReducerProps } from '@store/index.props';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { RegistrationStackNavigatorEnum } from '@navigation/StackNavigators/registration/RegistrationStackNavigator.enum';
import { useNavigation } from '@hooks/useNavigation';

export const EmailScreen = (): JSX.Element => {
    const email = useSelector(
        (state: ReducerProps) => state.registration.email
    );
    const dispatch = useDispatch();

    const input = createRef<TextInput>();

    const { navigateTo } = useNavigation(
        RootStackNavigatorEnum.RegistrationStack,
        () => input.current?.focus()
    );

    const onChange = useCallback(
        (value: string) => dispatch(setEmailAction(value)),
        [dispatch]
    );

    const continuePressed = () => {
        if (email && email.includes('@')) {
            navigateTo(RegistrationStackNavigatorEnum.PasswordScreen);
        } else if (email) {
            Alert.alert('Please select valid email address');
        } else {
            Alert.alert('Please select email address');
        }
    };

    return (
        <SafeAreaProvider>
            <Title title="What is your email?" />
            <Input
                ref={input}
                inputType={InputTypeEnum.EMAIL}
                onChange={onChange}
                value={email}
                iconRight={<Icon name={IconEnum.PROFILE} size={25} />}
                viewStyle={EmailScreenStyle.input}
            />
            <Continue onPress={continuePressed} />
        </SafeAreaProvider>
    );
};
