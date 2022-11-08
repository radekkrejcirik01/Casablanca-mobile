import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const SettingsListItemStyle = StyleSheet.create({
    touchableOpacity: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    title: {
        flex: 1,
        paddingVertical: 14,
        fontSize: 16,
        color: COLORS.WHITE,
        fontWeight: '600'
    },
    containerRight: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    description: {
        marginRight: 10,
        color: COLORS.WHITE
    }
});
