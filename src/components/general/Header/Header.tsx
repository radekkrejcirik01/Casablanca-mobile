import React from 'react';
import { Text, View } from 'react-native';
import { HeaderStyle } from '@components/general/Header/Header.style';
import { Icon } from '@components/icon/Icon';
import { IconEnum } from '../../icon/Icon.enum';

export const Header = (): JSX.Element => (
    <View style={HeaderStyle.container}>
        <Icon name={IconEnum.FLASH} />
        <Text style={HeaderStyle.text}>Casablanca</Text>
    </View>
);
