import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const StackNavigatorStyle = StyleSheet.create({
    navigationScreen: {
        shadowOpacity: 0,
        backgroundColor: COLORS.MAIN_BLUE
    },
    bottomBorder: {
        borderBottomWidth: 0.25,
        borderBottomColor: COLORS.MAIN_BLUE_100
    },
    blackBackground: {
        backgroundColor: COLORS.BLACK
    }
});
