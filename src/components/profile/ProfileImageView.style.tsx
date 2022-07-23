import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const ProfileImageViewStyle = StyleSheet.create({
    animatedImage: {
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: COLORS.LIGHTGRAY_100
    },
    settingsIcon: {
        marginTop: 50,
        marginLeft: 30
    }
});
