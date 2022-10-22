import React, { createRef, useCallback } from 'react';
import { Alert, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Icon } from '@components/icon/Icon';
import { IconEnum } from '@components/icon/Icon.enum';
import { InputTypeEnum } from '@components/general/Input/Input.enum';
import { Input } from '@components/general/Input/Input';
import { FirstnameScreenStyle } from '@screens/registration/FirstnameScreen/FirstnameScreen.style';
import { Continue } from '@components/registration/Continue/Continue';
import { Title } from '@components/general/Title/Title';
import { setFirstnameAction } from '@store/RegistrationReducer';
import { ReducerProps } from '@store/index.props';
import { useNavigation } from '@hooks/useNavigation';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { RegistrationStackNavigatorEnum } from '@navigation/StackNavigators/registration/RegistrationStackNavigator.enum';

export const FirstnameScreen = (): JSX.Element => {
    const firstname = useSelector(
        (state: ReducerProps) => state.registration.firstname
    );
    const dispatch = useDispatch();

    const input = createRef<TextInput>();

    const { navigateTo } = useNavigation(
        RootStackNavigatorEnum.RegistrationStack,
        () => input.current?.focus()
    );

    const onChange = useCallback(
        (value: string) => dispatch(setFirstnameAction(value)),
        [dispatch]
    );

    const continuePressed = () => {
        if (firstname) {
            navigateTo(RegistrationStackNavigatorEnum.BirthdayScreen);
        } else {
            Alert.alert('Please select firstname');
        }
    };

    return (
        <SafeAreaProvider>
            <Title title="What is your firstname?" />
            <Input
                ref={input}
                inputType={InputTypeEnum.TEXT}
                autoFocus
                onChange={onChange}
                iconRight={<Icon name={IconEnum.PROFILE} size={25} />}
                viewStyle={FirstnameScreenStyle.input}
            />
            <Continue onPress={continuePressed} />
        </SafeAreaProvider>
    );
};
