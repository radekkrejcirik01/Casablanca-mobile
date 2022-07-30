import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const SettingsListItemStyle = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: COLORS.LIGHTGRAY_100
    },
    touchableOpacity: {
        paddingLeft: 10,
        paddingRight: 20,
        alignItems: 'center',
        flexDirection: 'row'
    },
    title: {
        paddingVertical: 12,
        paddingLeft: 5,
        flex: 1,
        color: COLORS.WHITE,
        fontSize: 16,
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
