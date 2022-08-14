import React, { createRef, useEffect } from 'react';
import { Alert, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation as useNavigationModule } from '@react-navigation/native';
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

    const navigation = useNavigationModule();
    const { navigateTo } = useNavigation(
        RootStackNavigatorEnum.RegistrationStack
    );
    const dispatch = useDispatch();

    const input = createRef<TextInput>();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            input.current?.focus();
        });
        return unsubscribe;
    }, [navigation, input]);

    const continuePressed = () => {
        if (password) {
            dispatch(setUserToken('radek'));
        } else {
            Alert.alert('Please type password');
        }
    };

    return (
        <SafeAreaProvider>
            <Title title="Password" />
            <View style={PasswordScreenStyle.inputContainer}>
                <Input
                    ref={input}
                    inputType={InputTypeEnum.PASSWORD}
                    autoFocus
                    onChange={(value: string) =>
                        dispatch(setPasswordAction(value))
                    }
                    iconRight={<Icon name={IconEnum.PROFILE} size={25} />}
                />
            </View>
            <Continue onPress={continuePressed} />
        </SafeAreaProvider>
    );
};
