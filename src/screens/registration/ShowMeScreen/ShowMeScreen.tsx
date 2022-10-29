import React, { useCallback } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Title } from '@components/general/Title/Title';
import { ShowMeScreenStyle } from '@screens/registration/ShowMeScreen/ShowMeScreen.style';
import { ShowMeSelect } from '@components/registration/ShowMeSelect/ShowMeSelect';
import { ReducerProps } from '@store/index.props';
import { useNavigation } from '@hooks/useNavigation';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { RegistrationStackNavigatorEnum } from '@navigation/StackNavigators/registration/RegistrationStackNavigator.enum';
import { setShowMeAction } from '@store/UserReducer';
import { ContinueButton } from '@components/registration/ContinueButton/ContinueButton';

export const ShowMeScreen = (): JSX.Element => {
    const showMe = useSelector((state: ReducerProps) => state.user.showMe);

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

    const continuePressed = useCallback(() => {
        if (showMe) {
            navigateTo(RegistrationStackNavigatorEnum.EmailScreen);
        } else {
            Alert.alert('Please select some option');
        }
    }, [navigateTo, showMe]);

    return (
        <>
            <Title title="I prefer to see" style={ShowMeScreenStyle.title} />
            <ShowMeSelect
                showMe={showMe}
                onSelect={onSelect}
                style={ShowMeScreenStyle.select}
            />
            <ContinueButton onPress={continuePressed} />
        </>
    );
};
