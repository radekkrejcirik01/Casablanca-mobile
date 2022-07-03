import { DefaultTheme } from '@react-navigation/native';
import COLORS from '@constants/COLORS';

export const CUSTOM_THEME = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: COLORS.MAIN_BLUE
    }
};
