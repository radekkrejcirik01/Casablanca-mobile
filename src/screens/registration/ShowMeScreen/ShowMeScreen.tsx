import React from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Continue } from '@components/registration/Continue/Continue';
import { Title } from '@components/general/Title/Title';
import { ShowMeScreenStyle } from '@screens/registration/ShowMeScreen/ShowMeScreen.style';
import { ShowMeSelect } from '@components/registration/ShowMeSelect/ShowMeSelect';
import { ReducerProps } from '@store/index.props';
import { useNavigation } from '@hooks/useNavigation';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { RegistrationStackNavigatorEnum } from '@navigation/StackNavigators/registration/RegistrationStackNavigator.enum';

export const ShowMeScreen = (): JSX.Element => {
    const showMe = useSelector(
        (state: ReducerProps) => state.registration.showMe
    );

    const { navigateTo } = useNavigation(
        RootStackNavigatorEnum.RegistrationStack
    );

    const continuePressed = () => {
        if (showMe) {
            navigateTo(RegistrationStackNavigatorEnum.EmailScreen);
            return;
        }
        Alert.alert('Please select option');
    };

    return (
        <SafeAreaProvider>
            <Title title="Show me" />
            <ShowMeSelect style={ShowMeScreenStyle.select} />
            <Continue onPress={continuePressed} />
        </SafeAreaProvider>
    );
};
