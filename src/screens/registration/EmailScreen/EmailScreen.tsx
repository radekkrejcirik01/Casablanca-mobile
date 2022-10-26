import React, { createRef, useCallback } from 'react';
import { Alert, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Icon } from '@components/icon/Icon';
import { IconEnum } from '@components/icon/Icon.enum';
import { InputTypeEnum } from '@components/general/Input/Input.enum';
import { Input } from '@components/general/Input/Input';
import { Title } from '@components/general/Title/Title';
import { EmailScreenStyle } from '@screens/registration/EmailScreen/EmailScreen.style';
import { setEmailAction } from '@store/UserReducer';
import { ReducerProps } from '@store/index.props';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { RegistrationStackNavigatorEnum } from '@navigation/StackNavigators/registration/RegistrationStackNavigator.enum';
import { useNavigation } from '@hooks/useNavigation';
import { ContinueButton } from '@components/registration/ContinueButton/ContinueButton';

export const EmailScreen = (): JSX.Element => {
    const email = useSelector(
        (state: ReducerProps) => state.user.email
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

    const continuePressed = useCallback(() => {
        if (email && email.includes('@')) {
            navigateTo(RegistrationStackNavigatorEnum.PasswordScreen);
        } else if (email) {
            Alert.alert('Please select valid email address');
        } else {
            Alert.alert('Please select email address');
        }
    }, [email, navigateTo]);

    return (
        <SafeAreaProvider>
            <Title title="What is your email?" style={EmailScreenStyle.title} />
            <Input
                ref={input}
                inputType={InputTypeEnum.EMAIL}
                onChange={onChange}
                value={email}
                iconRight={<Icon name={IconEnum.PROFILE} size={25} />}
                viewStyle={EmailScreenStyle.input}
            />
            <ContinueButton onPress={continuePressed} />
        </SafeAreaProvider>
    );
};
