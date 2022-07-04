import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const InputStyle = StyleSheet.create({
    container: {
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: COLORS.WHITE
    },
    input: {
        flex: 1,
        color: COLORS.WHITE,
        fontWeight: '700',
        fontSize: 16
    }
});
