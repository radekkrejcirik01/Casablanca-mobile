import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const DistanceScreenStyle = StyleSheet.create({
    distanceText: {
        marginTop: 75,
        padding: 10,
        fontSize: 35,
        color: COLORS.MAIN_BLUE,
        fontWeight: '400',
        backgroundColor: COLORS.WHITE,
        borderRadius: 20,
        overflow: 'hidden',
        alignSelf: 'center'
    },
    pointView: {
        marginTop: 200,
        paddingHorizontal: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    pointText: {
        padding: 15,
        backgroundColor: COLORS.WHITE,
        borderRadius: 20,
        overflow: 'hidden',
        fontSize: 35
    },
    description: {
        marginTop: 150,
        color: COLORS.WHITE,
        fontSize: 12,
        fontWeight: '500',
        alignSelf: 'center'
    }
});
