import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const CheckProfileButtonStyle = StyleSheet.create({
    view: {
        width: 120,
        height: 40,
        borderRadius: 25,
        backgroundColor: COLORS.MAIN_BLUE,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    text: {
        color: COLORS.WHITE,
        fontWeight: 'bold'
    }
});
