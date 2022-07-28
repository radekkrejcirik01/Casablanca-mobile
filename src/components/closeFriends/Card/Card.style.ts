import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const CardStyle = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 20,
        borderRadius: 20,
        backgroundColor: COLORS.WHITE
    },
    row: {
        flexDirection: 'row'
    },
    image: {
        width: 35,
        height: 35,
        borderRadius: 20
    },
    view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        padding: 5,
        fontWeight: '600',
        color: COLORS.MAIN_BLUE
    },
    date: {
        padding: 5,
        fontWeight: '600',
        color: COLORS.MAIN_BLUE
    },
    description: {
        padding: 5,
        fontWeight: '600',
        color: COLORS.MAIN_BLUE
    }
});
