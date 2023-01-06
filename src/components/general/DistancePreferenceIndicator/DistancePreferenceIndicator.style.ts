import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const DistancePreferenceIndicatorStyle = StyleSheet.create({
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
    pointContainer: {
        marginTop: 125,
        flexDirection: 'row'
    }
});
