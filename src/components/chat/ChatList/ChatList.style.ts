import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const ChatListStyle = StyleSheet.create({
    contentContainer: {
        paddingHorizontal: 10,
        paddingTop: 40,
        backgroundColor: COLORS.BLACK
    },
    item: {
        borderRadius: 20,
        padding: 7.5,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderColor: COLORS.BLACK_100,
        backgroundColor: COLORS.BLACK,
        alignSelf: 'flex-start'
    },
    right: {
        borderColor: COLORS.MAIN_BLUE,
        backgroundColor: COLORS.MAIN_BLUE,
        alignSelf: 'flex-end'
    },
    text: {
        margin: 3,
        color: COLORS.WHITE,
        fontWeight: 'bold'
    }
});
