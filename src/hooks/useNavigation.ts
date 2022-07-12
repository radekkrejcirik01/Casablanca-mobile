import { useCallback } from 'react';
import { useNavigation as useNavigationModule } from '@react-navigation/native';
import { TabBarScreens } from '@navigation/navigation.enum';

export const useNavigation = (): {
    navigateTo: (screen: TabBarScreens) => void;
} => {
    const navigation = useNavigationModule();

    const navigateTo = useCallback(
        (screen: TabBarScreens) => {
            navigation.navigate(screen as never);
        },
        [navigation]
    );

    return { navigateTo };
};
