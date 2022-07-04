import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const ChatItemStyle = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        marginLeft: 15,
        paddingVertical: 5
    },
    view: {
        alignItems: 'center'
    },
    image: {
        borderRadius: 50,
        height: 75,
        width: 75
    },
    text: {
        fontSize: 12,
        color: COLORS.WHITE,
        fontWeight: 'bold',
        paddingTop: 5
    }
});
