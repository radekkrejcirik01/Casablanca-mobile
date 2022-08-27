import { useSelector } from 'react-redux';
import { ReducerProps } from '@store/index.props';

export const useTheme = (): {
    isDarkMode: boolean;
} => {
    const isDarkMode = useSelector(
        (state: ReducerProps) => state.theme.isDarkMode
    );

    return { isDarkMode };
};
