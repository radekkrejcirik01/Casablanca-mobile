import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const ContinueButtonStyle = StyleSheet.create({
    container: {
        marginTop: '25%',
        alignSelf: 'center'
    },
    text: {
        fontSize: 18,
        color: COLORS.WHITE,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});
