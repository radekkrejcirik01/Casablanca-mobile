import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const DoneButtonStyle = StyleSheet.create({
    container: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: COLORS.WHITE
    },
    text: {
        color: COLORS.WHITE,
        fontWeight: 'bold'
    }
});
