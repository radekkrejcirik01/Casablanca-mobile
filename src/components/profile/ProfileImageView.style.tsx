import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const ProfileImageViewStyle = StyleSheet.create({
    animatedImage: {
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: COLORS.LIGHTGRAY_100
    },
    animatedImageOpacity: {
        flex: 1,
        backgroundColor: COLORS.BLACK,
        opacity: 0.15
    }
});
