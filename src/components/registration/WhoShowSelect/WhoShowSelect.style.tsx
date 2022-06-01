import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const GenderSelectStyle = StyleSheet.create({
    container: {
        marginTop: '20%',
        marginHorizontal: 40
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: COLORS.WHITE,
        borderRadius: 20,
        padding: 15,
        marginBottom: 20
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
