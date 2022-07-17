import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const ChatListStyle = StyleSheet.create({
    contentContainer: {
        marginHorizontal: 10,
        paddingTop: 40
    },
    item: {
        alignSelf: 'flex-start',
        borderRadius: 20,
        padding: 7.5,
        paddingHorizontal: 10,
        backgroundColor: COLORS.WHITE
    },
    right: {
        alignSelf: 'flex-end'
    },
    text: {
        color: COLORS.MAIN_BLUE,
        fontWeight: 'bold'
    }
});
