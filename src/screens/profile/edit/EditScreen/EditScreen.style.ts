import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const EditScreenStyle = StyleSheet.create({
    container: {
        paddingHorizontal: 15
    },
    title: {
        marginTop: 40,
        marginBottom: 25,
        fontSize: 15,
        color: COLORS.WHITE,
        fontWeight: 'bold'
    }
});
