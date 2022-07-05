import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const MatchItemStyle = StyleSheet.create({
    container: {
        marginRight: 15,
        alignItems: 'center'
    },
    image: {
        borderRadius: 50,
        padding: 35
    },
    text: {
        fontSize: 12,
        color: COLORS.WHITE,
        fontWeight: 'bold',
        paddingTop: 5
    }
});
