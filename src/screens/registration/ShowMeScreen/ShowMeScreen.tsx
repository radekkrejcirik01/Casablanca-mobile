import React, { useCallback } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Continue } from '@components/registration/Continue/Continue';
import { Title } from '@components/general/Title/Title';
import { ShowMeScreenStyle } from '@screens/registration/ShowMeScreen/ShowMeScreen.style';
import { ShowMeSelect } from '@components/registration/ShowMeSelect/ShowMeSelect';
import { ReducerProps } from '@store/index.props';
import { useNavigation } from '@hooks/useNavigation';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { RegistrationStackNavigatorEnum } from '@navigation/StackNavigators/registration/RegistrationStackNavigator.enum';
import { setShowMeAction } from '@store/RegistrationReducer';

export const ShowMeScreen = (): JSX.Element => {
    const showMe = useSelector(
        (state: ReducerProps) => state.registration.showMe
    );

    const dispatch = useDispatch();

    const { navigateTo } = useNavigation(
        RootStackNavigatorEnum.RegistrationStack
    );

    const onSelect = useCallback(
        (value: string) => {
            dispatch(setShowMeAction(value));
        },
        [dispatch]
    );

    const continuePressed = () => {
        if (showMe) {
            navigateTo(RegistrationStackNavigatorEnum.EmailScreen);
        } else {
            Alert.alert('Please select some option');
        }
    };

    return (
        <SafeAreaProvider>
            <Title title="Show me" />
            <ShowMeSelect
                showMe={showMe}
                onSelect={onSelect}
                style={ShowMeScreenStyle.select}
            />
            <Continue onPress={continuePressed} />
        </SafeAreaProvider>
    );
};
