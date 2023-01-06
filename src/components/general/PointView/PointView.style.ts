import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const PointViewStyle = StyleSheet.create({
    pointView: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    pointText: {
        padding: 15,
        borderRadius: 20,
        fontSize: 30,
        backgroundColor: COLORS.WHITE,
        overflow: 'hidden'
    }
});
