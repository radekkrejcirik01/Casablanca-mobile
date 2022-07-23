import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const SettingsListStyle = StyleSheet.create({
    container: {
        paddingTop: 20
    },
    lastItem: {
        marginTop: 150,
        borderTopWidth: 1,
        borderColor: COLORS.LIGHTGRAY_100
    }
});
