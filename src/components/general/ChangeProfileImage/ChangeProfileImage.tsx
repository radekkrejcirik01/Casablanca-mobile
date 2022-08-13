import React from 'react';
import FastImage from 'react-native-fast-image';
import { ChangeProfileImageStyle } from '@components/general/ChangeProfileImage/ChangeProfileImage.style';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { Icon } from '@components/icon/Icon';
import { IconEnum } from '@components/icon/Icon.enum';
import { View } from 'react-native';

export const ChangeProfileImage = (): JSX.Element => {
    const onPress = () => {
        console.log('onPress');
    };
    return (
        <TouchableOpacity
            onPress={onPress}
            style={ChangeProfileImageStyle.touchableOpacity}
        >
            <View>
                <FastImage
                    source={require('../../../assets/images/profilovka.png')}
                    style={ChangeProfileImageStyle.image}
                />
                <Icon
                    name={IconEnum.EDIT}
                    size={20}
                    style={ChangeProfileImageStyle.icon}
                />
            </View>
        </TouchableOpacity>
    );
};
