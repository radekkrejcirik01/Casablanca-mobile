import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const SettingsListItemStyle = StyleSheet.create({
    touchableOpacity: {
        paddingLeft: 10,
        paddingRight: 20,
        alignItems: 'center',
        flexDirection: 'row'
    },
    title: {
        paddingVertical: 14,
        paddingLeft: 5,
        flex: 1,
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
