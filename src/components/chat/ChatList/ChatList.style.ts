import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';
import SHADOW from '@constants/SHADOW';

export const ChatListStyle = StyleSheet.create({
    contentContainer: {
        paddingHorizontal: 12,
        paddingTop: 40,
        paddingBottom: 20,
        backgroundColor: COLORS.BLACK
    },
    item: {
        ...SHADOW.CHAT_ITEM,
        marginBottom: 5,
        borderRadius: 20,
        padding: 7.5,
        paddingHorizontal: 10,
        backgroundColor: COLORS.BLACK,
        alignSelf: 'flex-start'
    },
    right: {
        borderColor: COLORS.MAIN_BLUE,
        backgroundColor: COLORS.MAIN_BLUE,
        alignSelf: 'flex-end'
    },
    text: {
        margin: 4,
        color: COLORS.WHITE,
        fontWeight: '600'
    }
});
