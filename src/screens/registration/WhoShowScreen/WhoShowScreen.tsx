import React from 'react';
import { Alert, View } from 'react-native';
import { useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import COLORS from '@constants/COLORS';
import { Continue } from '@components/registration/Continue/Continue';
import { Title } from '@components/general/Title/Title';
import { WhoShowScreenStyle } from '@screens/registration/WhoShowScreen/WhoShowScreen.style';
import { WhoShowSelect } from '@components/registration/WhoShowSelect/WhoShowSelect';
import { ReducerProps } from '@store/index.props';
import { useNavigation } from '@hooks/useNavigation';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { RegistrationStackNavigatorEnum } from '@navigation/StackNavigators/registration/RegistrationStackNavigator.enum';

export const WhoShowScreen = (): JSX.Element => {
    const whoShow = useSelector(
        (state: ReducerProps) => state.registration.whoShow
    );

    const { navigateTo } = useNavigation(
        RootStackNavigatorEnum.RegistrationStack
    );

    const continuePressed = () => {
        if (whoShow) {
            navigateTo(RegistrationStackNavigatorEnum.PasswordScreen);
        } else {
            Alert.alert('Please select option');
        }
    };

    return (
        <SafeAreaProvider>
            <LinearGradient
                colors={[COLORS.MAIN_RED, COLORS.MAIN_BLUE]}
                locations={[0.15, 0.9]}
                style={WhoShowScreenStyle.container}
            >
                <Title title="Show me" />
                <View style={WhoShowScreenStyle.select}>
                    <WhoShowSelect />
                </View>
                <Continue onPress={continuePressed} />
            </LinearGradient>
        </SafeAreaProvider>
    );
};
