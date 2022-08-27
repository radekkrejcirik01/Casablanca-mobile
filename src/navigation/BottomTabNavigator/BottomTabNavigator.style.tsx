import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const BottomTabNavigatorStyle = StyleSheet.create({
    tabBar: {
        marginTop: 10,
        paddingHorizontal: 15,
        borderTopWidth: 0,
        backgroundColor: COLORS.TRANSPARENT
    },
    tabBarLabel: {
        fontSize: 9,
        color: COLORS.WHITE,
        fontWeight: 'bold'
    }
});
