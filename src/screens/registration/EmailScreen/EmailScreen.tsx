import React, { createRef, useEffect } from 'react';
import { Alert, TextInput, View } from 'react-native';
import { useNavigation as useNavigationModule } from '@react-navigation/native';
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
        if (email && email.includes('@')) {
            navigateTo(RegistrationStackNavigatorEnum.BirthdayScreen);
        } else if (email) {
            Alert.alert('Please select email address');
        }

        if (!email) {
            Alert.alert('Please select email');
        }
    };

    return (
        <SafeAreaProvider>
            <Title title="What is your email?" />
            <View style={EmailScreenStyle.inputContainer}>
                <Input
                    ref={input}
                    inputType={InputTypeEnum.EMAIL}
                    onChange={(value: string) =>
                        dispatch(setEmailAction(value))
                    }
                    value={email}
                    iconRight={<Icon name={IconEnum.PROFILE} size={25} />}
                />
            </View>
            <Continue onPress={continuePressed} />
        </SafeAreaProvider>
    );
};
