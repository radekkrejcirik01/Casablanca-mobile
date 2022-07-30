import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const SwiperCardStyle = StyleSheet.create({
    container: {
        backgroundColor: COLORS.GRAY_300
    },
    image: {
        width: '100%',
        height: '100%',
        paddingRight: 5,
        paddingLeft: '3%',
        paddingBottom: '5%'
    },
    lottieView: {
        width: 90,
        height: 90,
        alignSelf: 'flex-end'
    },
    tagView: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    tagInfoView: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        borderRadius: 20,
        padding: 7.5,
        paddingHorizontal: 10,
        marginTop: 10,
        backgroundColor: COLORS.MAIN_BLUE
    },
    tagTitle: {
        fontSize: 14
    },
    tagText: {
        fontSize: 12.5,
        color: COLORS.WHITE,
        fontWeight: 'bold',
        paddingHorizontal: 2
    },
    emoji: {
        paddingRight: 3,
        fontSize: 12
    }
});
