import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const SwiperCardStyle = StyleSheet.create({
    container: {
        paddingHorizontal: 15
    },
    title: {
        marginTop: 30,
        marginBottom: 20,
        fontSize: 18,
        color: COLORS.WHITE,
        fontWeight: 'bold'
    }
});