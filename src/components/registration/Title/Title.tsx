import React from 'react';
import { Text } from 'react-native';
import { TitleProps } from '@components/registration/Title/Title.props';
import { TitleStyle } from '@components/registration/Title/Title.style';

export const Title = ({ title }: TitleProps): JSX.Element => (
    <Text style={TitleStyle.title}>{title}</Text>
);
