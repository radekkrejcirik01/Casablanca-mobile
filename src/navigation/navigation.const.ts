import { DefaultTheme } from '@react-navigation/native';
import COLORS from '@constants/COLORS';

export const LIGHT_THEME = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: COLORS.MAIN_BLUE
    }
};

export const DARK_THEME = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: COLORS.BLACK
    }
};
