import { StyleSheet } from 'react-native';

export const SwiperStyle = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
        marginBottom: 10,
        borderRadius: 20,
        overflow: 'hidden'
    },
    lottieContainer: {
        top: 13,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        alignSelf: 'center'
    },
    lottie: {
        width: 50,
        height: 50
    },
    viewPager: {
        flex: 1
    },
    topCard: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    bottomCard: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    }
});
