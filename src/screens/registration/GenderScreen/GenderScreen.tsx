import React from 'react';
import { Alert, View } from 'react-native';
import { useSelector } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '@constants/COLORS';
import { Continue } from '@components/registration/Continue/Continue';
import { Title } from '@components/general/Title/Title';
import { GenderScreenStyle } from '@screens/registration/GenderScreen/GenderScreen.style';
import { GenderSelect } from '@components/registration/GenderSelect/GenderSelect';
import { ReducerProps } from '@store/index.props';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { useNavigation } from '@hooks/useNavigation';
import { RegistrationStackNavigatorEnum } from '@navigation/StackNavigators/registration/RegistrationStackNavigator.enum';

export const GenderScreen = (): JSX.Element => {
    const gender = useSelector(
        (state: ReducerProps) => state.registration.gender
    );

    const { navigateTo } = useNavigation(
        RootStackNavigatorEnum.RegistrationStack
    );

    const continuePressed = () => {
        if (gender) {
            navigateTo(RegistrationStackNavigatorEnum.WhoShowScreen);
        } else {
            Alert.alert('Please select option');
        }
    };

    return (
        <SafeAreaProvider>
            <LinearGradient
                colors={[COLORS.MAIN_RED, COLORS.MAIN_BLUE]}
                locations={[0.15, 0.9]}
                style={GenderScreenStyle.container}
            >
                <Title title="I am" />
                <View style={GenderScreenStyle.select}>
                    <GenderSelect />
                </View>
                <Continue onPress={continuePressed} />
            </LinearGradient>
        </SafeAreaProvider>
    );
};
