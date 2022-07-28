import React from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { CardProps } from '@components/closeFriends/Card/Card.props';
import { CardStyle } from '@components/closeFriends/Card/Card.style';

export const Card = ({ item }: CardProps): JSX.Element => (
    <View style={CardStyle.container}>
        <View style={CardStyle.row}>
            <FastImage
                source={require('../../../assets/images/profilovka.png')}
                style={CardStyle.image}
            />
            <View style={CardStyle.view}>
                <Text style={CardStyle.name}>{item.name}</Text>
                <Text style={CardStyle.date}>{item.date}</Text>
            </View>
        </View>
        <Text style={CardStyle.description}>{item.description}</Text>
    </View>
);
