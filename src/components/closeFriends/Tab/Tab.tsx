import React from 'react';
import { Text, View } from 'react-native';
import { TabProps } from '@components/closeFriends/Tab/Tab.props';
import { TabStyle } from '@components/closeFriends/Tab/Tab.style';

export const Tab = ({ item }: TabProps): JSX.Element => (
    <View style={TabStyle.container}>
        <Text>{item.name}</Text>
    </View>
);
