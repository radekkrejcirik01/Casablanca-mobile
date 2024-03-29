import React, { createRef, useCallback } from 'react';
import { Alert, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '@components/icon/Icon';
import { IconEnum } from '@components/icon/Icon.enum';
import { InputTypeEnum } from '@components/general/Input/Input.enum';
import { Input } from '@components/general/Input/Input';
import { FirstnameScreenStyle } from '@screens/registration/FirstnameScreen/FirstnameScreen.style';
import { Title } from '@components/general/Title/Title';
import { setFirstnameAction } from '@store/UserReducer';
import { ReducerProps } from '@store/index.props';
import { useNavigation } from '@hooks/useNavigation';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { RegistrationStackNavigatorEnum } from '@navigation/StackNavigators/registration/RegistrationStackNavigator.enum';
import { ContinueButton } from '@components/registration/ContinueButton/ContinueButton';

export const FirstnameScreen = (): JSX.Element => {
    const firstname = useSelector(
        (state: ReducerProps) => state.user.firstname
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

    const continuePressed = useCallback(() => {
        if (firstname) {
            navigateTo(RegistrationStackNavigatorEnum.BirthdayScreen);
        } else {
            Alert.alert('Please select firstname');
        }
    }, [firstname, navigateTo]);

    return (
        <>
            <Title
                title="What is your first name?"
                style={FirstnameScreenStyle.title}
            />
            <Input
                ref={input}
                inputType={InputTypeEnum.TEXT}
                autoFocus
                onChange={onChange}
                value={firstname}
                iconRight={<Icon name={IconEnum.PROFILE} size={25} />}
                viewStyle={FirstnameScreenStyle.input}
            />
            <ContinueButton onPress={continuePressed} />
        </>
    );
};
