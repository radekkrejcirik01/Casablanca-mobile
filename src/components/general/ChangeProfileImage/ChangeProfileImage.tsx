import React from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import { ChangeProfileImageStyle } from '@components/general/ChangeProfileImage/ChangeProfileImage.style';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';

export const ChangeProfileImage = (): JSX.Element => {
    const onPress = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then((image: ImageOrVideo) => {
            console.log(image.path);
        });
    };

    return (
        <View style={ChangeProfileImageStyle.container}>
            <TouchableOpacity
                onPress={onPress}
                style={ChangeProfileImageStyle.image}
            >
                <FastImage
                    source={require('../../../assets/images/profilovka.png')}
                    style={ChangeProfileImageStyle.image}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
                <Text style={ChangeProfileImageStyle.text}>Change</Text>
            </TouchableOpacity>
        </View>
    );
};
