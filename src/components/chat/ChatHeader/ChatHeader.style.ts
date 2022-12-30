import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const ChatHeaderStyle = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
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
    title: {
        fontSize: 15,
        color: COLORS.WHITE,
        fontWeight: 'bold'
    }
});
