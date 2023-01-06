import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const InfoProfileScreenStyle = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.BLACK
    },
    iconButton: {
        top: 15,
        right: 15,
        zIndex: 2,
        position: 'absolute'
    },
    swiperCard: {
        flex: 1,
        borderRadius: 20
    }
});
