import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const MatchItemStyle = StyleSheet.create({
    container: {
        marginRight: 15,
        alignItems: 'center'
    },
    image: {
        padding: 35,
        borderRadius: 50
    },
    text: {
        paddingTop: 5,
        fontSize: 12,
        color: COLORS.WHITE,
        fontWeight: 'bold'
    }
});
