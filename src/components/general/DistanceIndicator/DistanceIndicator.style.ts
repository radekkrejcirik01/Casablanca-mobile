import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const DistanceIndicatorStyle = StyleSheet.create({
    distanceText: {
        padding: 10,
        fontSize: 35,
        borderRadius: 20,
        color: COLORS.MAIN_BLUE,
        backgroundColor: COLORS.WHITE,
        fontWeight: '400',
        overflow: 'hidden',
        alignSelf: 'center'
    },
    pointView: {
        marginTop: 125,
        paddingHorizontal: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    pointText: {
        padding: 15,
        borderRadius: 20,
        fontSize: 35,
        backgroundColor: COLORS.WHITE,
        overflow: 'hidden'
    }
});
