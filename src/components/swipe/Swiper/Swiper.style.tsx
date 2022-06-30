import { StyleSheet } from 'react-native';

export const SwiperStyle = StyleSheet.create({
    container: {
        flex: 1
    },
    animatableView: {
        position: 'absolute',
        top: '8%',
        alignSelf: 'center'
    },
    contentContainer: {
        flexGrow: 1
    },
    viewPager: {
        width: '100%',
        height: '100%'
    },
    borderTopRadius: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    }
});
