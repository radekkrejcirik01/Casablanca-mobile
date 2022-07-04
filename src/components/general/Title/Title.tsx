import React from 'react';
import { Text } from 'react-native';
import {
    TitleDefaultProps,
    TitleProps
} from '@components/general/Title/Title.props';
import { TitleStyle } from '@components/general/Title/Title.style';

export const Title = ({ title, style }: TitleProps): JSX.Element => (
    <Text style={[TitleStyle.title, style]}>{title}</Text>
);

Title.defaultProps = TitleDefaultProps;
