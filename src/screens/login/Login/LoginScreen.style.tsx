import { StyleSheet } from 'react-native';
import Colors from '@constants/Colors';

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
        color: Colors.WHITE,
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    registerText: {
        marginTop: 100,
        color: Colors.WHITE,
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    }
});
