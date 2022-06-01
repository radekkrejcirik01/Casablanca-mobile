import React from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { IconStyle } from '@components/icon/Icon.style';
import { IconDefaultProps, IconProps } from '@components/icon/Icon.props';
import { ICONS } from '@components/icon/Icon.enum';

export const Icon = ({ name, size }: IconProps): JSX.Element => (
    <View style={{ width: size, height: size }}>
        <FastImage style={IconStyle.image} source={ICONS[name]} />
    </View>
);

Icon.defaultProps = IconDefaultProps;
