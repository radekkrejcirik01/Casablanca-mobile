import { MessageOptions, showMessage } from 'react-native-flash-message';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import COLORS from '@constants/COLORS';

export const useFlashMessage = (): ((
    message: string,
    description: string,
    onPress?: () => void
) => void) => {
    const { top } = useSafeAreaInsets();

    const statusBarHeight = top ? top - 10 : top;

    return (message: string, description: string, onPress: () => void) => {
        const onMessageOptions: Omit<MessageOptions, 'message'> = {
            duration: 3000,
            animationDuration: 250,
            floating: true,
            statusBarHeight,
            backgroundColor: COLORS.MAIN_BLUE
        };

        showMessage({
            ...onMessageOptions,
            message,
            description,
            onPress
        });
    };
};
