import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const DistanceScreenStyle = StyleSheet.create({
    container: {
        marginTop: 100
    },
    description: {
        marginTop: 150,
        color: COLORS.WHITE,
        fontSize: 12,
        fontWeight: '500',
        alignSelf: 'center'
    }
});
