import React from 'react';
import { ScrollView, Text } from 'react-native';
import { InfoTextProps } from '@components/general/InfoText/InfoText.props';
import { InfoTextStyle } from '@components/general/InfoText/InfoText.style';

export const InfoText = ({ content }: InfoTextProps): JSX.Element => (
    <ScrollView
        showsVerticalScrollIndicator={false}
        style={InfoTextStyle.scrollView}
    >
        <Text style={InfoTextStyle.text}>{content}</Text>
    </ScrollView>
);
