import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const ChangePasswordScreenStyle = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingHorizontal: 15
    },
    title: {
        paddingBottom: 10,
        color: COLORS.WHITE,
        fontWeight: '600'
    },
    marginTop: {
        marginTop: 25
    },
    keyboardAvoiding: {
        flex: 1,
        justifyContent: 'center'
    },
    confirm: {
        fontSize: 14,
        alignSelf: 'center',
        color: COLORS.WHITE,
        fontWeight: 'bold'
    }
});
