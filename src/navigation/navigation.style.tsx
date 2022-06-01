import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const NavigationStyle = StyleSheet.create({
    header: {
        backgroundColor: COLORS.MAIN_RED,
        shadowOpacity: 0
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: -20
    },
    headerLeftContainer: {
        paddingLeft: 20
    },
    loginScreenHeaderLeft: {
        paddingLeft: 0
    }
});
