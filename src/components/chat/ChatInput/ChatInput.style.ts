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
        borderColor: COLORS.WHITE,
        borderWidth: 1,
        backgroundColor: COLORS.MAIN_BLUE,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        fontSize: 15,
        padding: 5,
        color: COLORS.WHITE
    },
    send: {
        color: COLORS.WHITE,
        fontWeight: '700'
    }
});
