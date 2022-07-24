import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const InfoModalStyle = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 20,
        justifyContent: 'space-between',
        backgroundColor: COLORS.WHITE
    },
    title: {
        fontSize: 20,
        fontWeight: '500'
    },
    description: {
        marginVertical: 20,
        fontSize: 15,
        fontWeight: '500'
    },
    closeButton: {
        padding: 10,
        alignSelf: 'center',
        fontSize: 15,
        borderRadius: 18,
        color: COLORS.WHITE,
        backgroundColor: COLORS.MAIN_BLUE,
        fontWeight: '600',
        overflow: 'hidden'
    }
});
