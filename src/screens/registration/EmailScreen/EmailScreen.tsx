import React, { createRef, useEffect } from 'react';
import { Alert, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '@constants/COLORS';
import { Icon } from '@components/icon/Icon';
import { IconEnum } from '@components/icon/Icon.enum';
import { InputTypeEnum } from '@components/general/Input/Input.enum';
import { Input } from '@components/general/Input/Input';
import { Continue } from '@components/registration/Continue/Continue';
import { RegisterNavigatorScreens } from '@navigation/navigation.enum';
import { Title } from '@components/registration/Title/Title';
import { EmailScreenStyle } from '@screens/registration/EmailScreen/EmailScreen.style';
import { setEmailAction } from '@store/RegistrationReducer';
import { ReducerProps } from '@store/index.props';

export const EmailScreen = (): JSX.Element => {
    const email = useSelector(
        (state: ReducerProps) => state.registration.email
    );

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const input = createRef<TextInput>();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            input.current?.focus();
        });
        return unsubscribe;
    }, [navigation, input]);

    const continuePressed = () => {
        if (email && email.includes('@')) {
            navigation.navigate(RegisterNavigatorScreens.BirthdayScreen);
        } else if (email) {
            Alert.alert('Please select email address');
        }

        if (!email) {
            Alert.alert('Please select email');
        }
    };

    return (
        <SafeAreaProvider>
            <LinearGradient
                colors={[COLORS.MAIN_RED, COLORS.MAIN_BLUE]}
                locations={[0.15, 0.9]}
                style={EmailScreenStyle.container}
            >
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
            </LinearGradient>
        </SafeAreaProvider>
    );
};
