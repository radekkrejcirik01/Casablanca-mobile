import React from 'react';
import { Text, View } from 'react-native';
import { LoginHeaderStyle } from '@components/login/LoginHeader/LoginHeader.style';
import { Icon } from '@components/icon/Icon';
import { IconEnum } from '@components/icon/Icon.enum';

export const LoginHeader = (): JSX.Element => (
    <View style={LoginHeaderStyle.container}>
        <Icon size={32} name={IconEnum.FLASH} />
        <Text style={LoginHeaderStyle.text}>Casablanca</Text>
    </View>
);
