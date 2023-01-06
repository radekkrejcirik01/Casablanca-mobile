import React, { useMemo } from 'react';
import { StyleProp, Text, TextStyle, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { CardProps } from '@components/closeFriends/Card/Card.props';
import { CardStyle } from '@components/closeFriends/Card/Card.style';
import { useTheme } from '@hooks/useTheme';
import COLORS from '@constants/COLORS';
import { ThemeView } from '@components/general/ThemeView/ThemeView';

export const Card = ({ item }: CardProps): JSX.Element => {
    const { isDarkMode } = useTheme();

    const textStyle = useMemo(
        (): StyleProp<TextStyle> => [
            CardStyle.text,
            { color: isDarkMode ? COLORS.WHITE : COLORS.MAIN_BLUE }
        ],
        [isDarkMode]
    );

    return (
        <ThemeView isDefault={false} style={CardStyle.container}>
            <View style={CardStyle.row}>
                <FastImage
                    source={require('../../../assets/images/profilovka.png')}
                    style={CardStyle.image}
                />
                <View style={CardStyle.view}>
                    <Text style={textStyle}>{item.name}</Text>
                    <Text style={textStyle}>{item.date}</Text>
                </View>
            </View>
            <Text style={textStyle}>{item.description}</Text>
        </ThemeView>
    );
};
