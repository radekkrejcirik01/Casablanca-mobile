import { useCallback, useEffect } from 'react';
import { useNavigation as useNavigationModule } from '@react-navigation/native';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { MessagesStackNavigatorEnum } from '@navigation/StackNavigators/messages/MessagesStackNavigator.enum';
import { ProfileStackNavigatorEnum } from '@navigation/StackNavigators/profile/ProfileStackNavigator.enum';
import { RegistrationStackNavigatorEnum } from '@navigation/StackNavigators/registration/RegistrationStackNavigator.enum';
import { SwipeStackNavigatorEnum } from '@navigation/StackNavigators/swipe/SwipeStackNavigator.enum';

type ScreenProp =
    | RootStackNavigatorEnum
    | ProfileStackNavigatorEnum
    | SwipeStackNavigatorEnum
    | MessagesStackNavigatorEnum
    | RegistrationStackNavigatorEnum;

export const useNavigation = (
    stack?: RootStackNavigatorEnum,
    onFocus?: () => void
): {
    navigateTo: (screen: ScreenProp, params?: object) => void;
    navigateBack: () => void;
} => {
    const navigation = useNavigationModule();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            if (onFocus) onFocus();
        });
        return unsubscribe;
    }, [onFocus, navigation]);

    const navigateTo = useCallback(
        (screen: ScreenProp, params: object) => {
            navigation.navigate(
                stack as never,
                {
                    screen,
                    params
                } as never
            );
        },
        [navigation, stack]
    );

    const navigateBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return { navigateTo, navigateBack };
};
