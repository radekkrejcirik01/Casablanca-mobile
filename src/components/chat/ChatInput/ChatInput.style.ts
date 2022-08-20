import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const ChatInputStyle = StyleSheet.create({
    container: {
        marginTop: -25, // to match input's layout with chat list items
        marginHorizontal: 10,
        marginBottom: 5,
        padding: 5,
        paddingLeft: 5,
        paddingRight: 20,
        borderRadius: 25,
        borderWidth: 0.5,
        borderColor: COLORS.BLACK_100,
        backgroundColor: COLORS.BLACK,
        flexDirection: 'row'
    },
    input: {
        margin: 2,
        padding: 5,
        paddingRight: 15,
        flex: 1,
        fontSize: 15,
        color: COLORS.WHITE
    },
    sendView: {
        paddingBottom: 6,
        justifyContent: 'flex-end'
    },
    send: {
        fontSize: 16,
        color: COLORS.WHITE,
        fontWeight: '700'
    }
});
