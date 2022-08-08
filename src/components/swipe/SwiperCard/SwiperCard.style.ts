import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const SwiperCardStyle = StyleSheet.create({
    container: {
        backgroundColor: COLORS.GRAY_300
    },
    image: {
        width: '100%',
        height: '100%'
    },
    lottie: {
        width: 90,
        height: 90,
        position: 'absolute',
        alignSelf: 'flex-end'
    },
    tagView: {
        left: '3%',
        bottom: '5%',
        position: 'absolute',
        justifyContent: 'flex-end'
    },
    tagInfoView: {
        marginTop: 10,
        padding: 7.5,
        paddingHorizontal: 10,
        borderRadius: 20,
        backgroundColor: COLORS.MAIN_BLUE,
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
