import React from 'react';
import { ScrollView, Text } from 'react-native';
import { InfoContentProps } from '@components/general/InfoContent/InfoContent.props';
import { InfoContentStyle } from '@components/general/InfoContent/InfoContent.style';

export const InfoContent = ({ content }: InfoContentProps): JSX.Element => (
    <ScrollView
        showsVerticalScrollIndicator={false}
        style={InfoContentStyle.scrollView}
    >
        <Text style={InfoContentStyle.text}>{content}</Text>
    </ScrollView>
);
