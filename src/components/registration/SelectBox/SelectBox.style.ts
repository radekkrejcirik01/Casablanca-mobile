import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const SelectBoxStyle = StyleSheet.create({
    container: {
        marginBottom: 20,
        padding: 15,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: COLORS.WHITE,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        color: COLORS.WHITE,
        fontWeight: 'bold'
    },
    checkBox: {
        height: 22,
        width: 22
    }
});
