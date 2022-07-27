import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DeleteAccountScreenStyle } from '@screens/settings/DeleteAccountScreen/DeleteAccountScreen.style';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { useNavigation } from '@hooks/useNavigation';

export const DeleteAccountScreen = (): JSX.Element => {
    const { navigateBack } = useNavigation();

    const confirmDelete = () => {
        console.log('Delete account');
    };

    return (
        <SafeAreaProvider>
            <Text style={DeleteAccountScreenStyle.title}>
                Sorry to see you go, are you sure you want to delete this
                account?
            </Text>
            <View style={DeleteAccountScreenStyle.buttonsContainer}>
                <TouchableOpacity onPress={confirmDelete}>
                    <Text style={DeleteAccountScreenStyle.confirm}>
                        Confirm
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={navigateBack}
                    style={DeleteAccountScreenStyle.noContainer}
                >
                    <Text style={DeleteAccountScreenStyle.no}>Not now</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaProvider>
    );
};
