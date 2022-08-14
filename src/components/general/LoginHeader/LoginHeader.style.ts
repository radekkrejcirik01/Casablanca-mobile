import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const LoginHeaderStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        marginLeft: 5,
        fontSize: 30,
        color: COLORS.WHITE,
        fontWeight: 'bold'
    }
});
