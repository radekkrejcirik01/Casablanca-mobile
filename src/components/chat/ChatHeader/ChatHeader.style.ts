import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const ChatHeaderStyle = StyleSheet.create({
    safeArea: {
        borderBottomWidth: 0.5,
        borderBottomColor: COLORS.BLACK_100,
        backgroundColor: COLORS.BLACK
    },
    container: {
        marginHorizontal: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    profileContainer: {
        flexDirection: 'row'
    },
    image: {
        marginLeft: 10,
        height: 35,
        width: 35,
        borderRadius: 20
    },
    infoContainer: {
        paddingLeft: 10,
        justifyContent: 'center'
    },
    name: {
        color: COLORS.WHITE,
        fontWeight: 'bold'
    }
});
