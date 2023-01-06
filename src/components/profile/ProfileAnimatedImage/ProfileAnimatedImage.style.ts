import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';
import {
    HEADER_HEIGHT_EXPANDED,
    HEADER_HEIGHT_NARROWED
} from '@components/profile/ProfileAnimatedImage/ProfileAnimatedImage.const';

export const ProfileAnimatedImageStyle = StyleSheet.create({
    animatedImage: {
        height: HEADER_HEIGHT_EXPANDED + HEADER_HEIGHT_NARROWED,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: COLORS.LIGHTGRAY_100
    }
});
