import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const MessagesItemStyle = StyleSheet.create({
    container: {
        marginBottom: 15,
        alignItems: 'flex-start'
    },
    row: {
        flexDirection: 'row'
    },
    image: {
        borderRadius: 50,
        height: 55,
        width: 55
    },
    box: {
        flex: 1,
        paddingBottom: 25,
        paddingHorizontal: 10,
        borderBottomWidth: 0.75
    },
    firstRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 14,
        paddingBottom: 5,
        color: COLORS.WHITE,
        fontWeight: 'bold'
    },
    message: {
        fontSize: 12,
        color: COLORS.WHITE,
        fontWeight: 'bold'
    }
});
