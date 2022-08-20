import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const ChatInputStyle = StyleSheet.create({
    container: {
        marginTop: -25, // to match input's layout with chat list items
        marginHorizontal: 10,
        marginBottom: 5,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 20,
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: COLORS.BLACK_100,
        backgroundColor: COLORS.BLACK,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        padding: 5,
        paddingRight: 10,
        flex: 1,
        fontSize: 15,
        color: COLORS.WHITE
    },
    send: {
        color: COLORS.WHITE,
        fontWeight: '700'
    }
});
