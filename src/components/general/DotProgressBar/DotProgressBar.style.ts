import { StyleSheet } from 'react-native';

export const DotProgressBarStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dot: {
        margin: 8,
        borderRadius: 10,
        width: 10,
        height: 10
    }
});
