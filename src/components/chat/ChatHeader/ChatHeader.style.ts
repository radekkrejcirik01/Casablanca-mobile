import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const ChatHeaderStyle = StyleSheet.create({
    safeArea: {
        borderBottomWidth: 0.2,
        borderBottomColor: COLORS.WHITE,
        backgroundColor: COLORS.MAIN_BLUE
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        paddingBottom: 10
    },
    profileContainer: {
        flexDirection: 'row'
    },
    image: {
        marginLeft: 10,
        height: 30,
        width: 30,
        borderRadius: 20
    },
    infoContainer: {
        paddingLeft: 10
    },
    name: {
        color: COLORS.WHITE,
        fontWeight: 'bold'
    },
    text: {
        color: COLORS.WHITE,
        fontWeight: '600',
        fontSize: 9
    }
});
