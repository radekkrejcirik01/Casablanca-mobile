import { useCallback } from 'react';
import { useNavigation as useNavigationModule } from '@react-navigation/native';
import { TabBarScreens } from '@navigation/navigation.enum';

export const useNavigation = (): {
    navigateTo: (screen: TabBarScreens) => void;
    navigateBack: () => void;
} => {
    const navigation = useNavigationModule();

    const navigateTo = useCallback(
        (screen: TabBarScreens) => {
            navigation.navigate(screen as never);
        },
        [navigation]
    );

    const navigateBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return { navigateTo, navigateBack };
};
