import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const RegistrationStackNavigatorStyle = StyleSheet.create({
    header: {
        shadowOpacity: 0,
        backgroundColor: COLORS.TRANSPARENT
    },
    headerTitle: {
        height: 100
    },
    headerLeft: {
        paddingLeft: 20
    }
});
