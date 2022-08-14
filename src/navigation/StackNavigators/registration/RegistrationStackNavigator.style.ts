import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const RegistrationStackNavigatorStyle = StyleSheet.create({
    header: {
        backgroundColor: COLORS.MAIN_BLUE,
        shadowOpacity: 0
    },
    headerTitle: {
        height: 100
    },
    headerLeft: {
        paddingLeft: 20
    }
});
