import { useCallback } from 'react';
import { useNavigation as useNavigationModule } from '@react-navigation/native';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { MessagesStackNavigatorEnum } from '@navigation/StackNavigators/messages/MessagesStackNavigator.enum';
import { ProfileStackNavigatorEnum } from '@navigation/StackNavigators/profile/ProfileStackNavigator.enum';
import { RegistrationStackNavigatorEnum } from '@navigation/StackNavigators/registration/RegistrationStackNavigator.enum';
import { SwipeStackNavigatorEnum } from '@navigation/StackNavigators/swipe/SwipeStackNavigator.enum';

export const useNavigation = (
    stack?: RootStackNavigatorEnum
): {
    navigateTo: (
        screen:
            | RootStackNavigatorEnum
            | ProfileStackNavigatorEnum
            | SwipeStackNavigatorEnum
            | MessagesStackNavigatorEnum
            | RegistrationStackNavigatorEnum
    ) => void;
    navigateBack: () => void;
} => {
    const navigation = useNavigationModule();

    const navigateTo = useCallback(
        (screen: string) => {
            navigation.navigate(stack as never, { screen } as never);
        },
        [navigation, stack]
    );

    const navigateBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return { navigateTo, navigateBack };
};
