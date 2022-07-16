import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const ChatInputStyle = StyleSheet.create({
    container: {
        padding: 5,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        borderRadius: 20,
        borderColor: COLORS.WHITE,
        borderWidth: 1,
        backgroundColor: COLORS.MAIN_BLUE
    },
    input: {
        fontSize: 15,
        padding: 5,
        color: COLORS.WHITE
    }
});
