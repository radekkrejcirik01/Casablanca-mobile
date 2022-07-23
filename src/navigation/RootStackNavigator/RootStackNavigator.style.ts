import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const RootStackNavigatorStyle = StyleSheet.create({
    mainRed: {
        backgroundColor: COLORS.MAIN_RED,
        shadowOpacity: 0
    },
    navigationScreen: {
        backgroundColor: COLORS.MAIN_BLUE,
        shadowOpacity: 0
    },
    loginScreenHeaderLeft: {
        paddingLeft: 0
    },
    registrationLeftContainer: {
        paddingLeft: 20
    }
});
