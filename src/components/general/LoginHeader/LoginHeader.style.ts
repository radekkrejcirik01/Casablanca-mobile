import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const LoginHeaderStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        marginLeft: 5,
        fontSize: 25,
        color: COLORS.WHITE,
        fontWeight: 'bold'
    }
});
