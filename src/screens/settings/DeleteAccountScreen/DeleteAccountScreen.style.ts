import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const DeleteAccountScreenStyle = StyleSheet.create({
    title: {
        padding: 20,
        fontSize: 25,
        fontWeight: '600',
        color: COLORS.WHITE
    },
    buttonsContainer: {
        paddingBottom: 150,
        flex: 1,
        justifyContent: 'flex-end'
    },
    confirm: {
        fontSize: 14,
        alignSelf: 'center',
        color: COLORS.WHITE,
        fontWeight: 'bold'
    },
    noContainer: {
        marginTop: 30,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 20,
        alignSelf: 'center',
        backgroundColor: COLORS.WHITE
    },
    no: {
        fontSize: 18,
        color: COLORS.MAIN_BLUE,
        fontWeight: 'bold'
    }
});
