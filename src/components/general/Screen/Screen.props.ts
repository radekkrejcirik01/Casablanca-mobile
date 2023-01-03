import { SafeAreaViewProps } from 'react-native-safe-area-context';

export interface ScreenProps extends SafeAreaViewProps {
    isModalScreen?: boolean;
}

export const ScreenDefaultProps = {
    isModalScreen: false
};
