import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const LoginScreenStyle = StyleSheet.create({
    container: {
        flex: 1
    },
    inputView: {
        height: 105,
        marginTop: '45%',
        paddingHorizontal: 40,
        justifyContent: 'space-between'
    },
    loginText: {
        marginTop: '20%',
        color: COLORS.WHITE,
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    registerText: {
        marginTop: 100,
        color: COLORS.WHITE,
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    }
});
