import { StyleSheet } from 'react-native';

export const DotProgressBarStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dot: {
        margin: 4,
        borderRadius: 10,
        width: 8,
        height: 8
    }
});
