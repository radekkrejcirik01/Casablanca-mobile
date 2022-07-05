import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const ChatItemStyle = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        marginBottom: 15
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
        borderBottomWidth: 0.3,
        borderBottomColor: COLORS.LIGHTGRAY_100,
        paddingBottom: 25,
        paddingHorizontal: 10
    },
    firstRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 14,
        color: COLORS.WHITE,
        fontWeight: 'bold',
        paddingBottom: 5
    },
    opacity: {
        opacity: 0.75
    },
    message: {
        fontSize: 12,
        color: COLORS.WHITE,
        fontWeight: '600'
    }
});
