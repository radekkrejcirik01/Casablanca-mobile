import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const BottomTabNavigatorStyle = StyleSheet.create({
    tabBar: {
        backgroundColor: COLORS.MAIN_BLUE,
        borderTopWidth: 0,
        paddingHorizontal: 15,
        marginTop: 10
    },
    tabBarLabel: {
        color: COLORS.WHITE,
        fontWeight: 'bold',
        fontSize: 9
    }
});
