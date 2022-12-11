import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const SwiperCardItemStyle = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        paddingBottom: 60,
        paddingLeft: 15,
        justifyContent: 'flex-end'
    },
    tagInfoView: {
        marginTop: 10,
        padding: 7.5,
        paddingHorizontal: 10,
        borderRadius: 20,
        backgroundColor: COLORS.MAIN_BLUE,
        maxWidth: '75%',
        flexDirection: 'row',
        alignSelf: 'flex-start'
    },
    tagTitle: {
        fontSize: 14
    },
    tagText: {
        paddingHorizontal: 2,
        fontSize: 12.5,
        color: COLORS.WHITE,
        fontWeight: 'bold'
    },
    emoji: {
        paddingRight: 3,
        fontSize: 12
    }
});
