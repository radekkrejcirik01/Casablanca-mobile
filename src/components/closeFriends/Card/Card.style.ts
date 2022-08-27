import { StyleSheet } from 'react-native';

export const CardStyle = StyleSheet.create({
    container: {
        marginBottom: 20,
        padding: 10,
        borderRadius: 20
    },
    row: {
        flexDirection: 'row'
    },
    image: {
        width: 35,
        height: 35,
        borderRadius: 20
    },
    view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        padding: 5,
        fontWeight: '600'
    }
});
