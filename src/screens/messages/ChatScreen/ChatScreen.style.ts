import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const ChatScreenStyle = StyleSheet.create({
    container: {
        backgroundColor: COLORS.BLACK
    },
    chatList: {
        height: '96%', // provisional solution
        width: '100%'
    },
    chatInput: {
        height: '4%', // provisional solution
        width: '100%',
        justifyContent: 'flex-end'
    }
});
