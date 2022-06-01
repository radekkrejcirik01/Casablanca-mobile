import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const ContinueStyle = StyleSheet.create({
    container: {
        alignSelf: 'center',
        marginTop: '25%'
    },
    text: {
        color: COLORS.WHITE,
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});
