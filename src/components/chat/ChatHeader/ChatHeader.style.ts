import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const ChatHeaderStyle = StyleSheet.create({
    safeArea: {
        borderBottomWidth: 2,
        borderBottomColor: COLORS.LIGHTGRAY,
        backgroundColor: COLORS.MAIN_BLUE
    },
    container: {
        marginLeft: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
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
        fontSize: 9,
        color: COLORS.WHITE,
        fontWeight: '600'
    }
});
