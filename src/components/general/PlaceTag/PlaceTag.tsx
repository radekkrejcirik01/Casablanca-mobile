import React, { useMemo, useState } from 'react';
import { StyleProp, Text, TextStyle, ViewStyle } from 'react-native';
import {
    PlaceTagDefaultProps,
    PlaceTagProps
} from '@components/general/PlaceTag/PlaceTag.props';
import { PlaceTagStyle } from '@components/general/PlaceTag/PlaceTag.style';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import COLORS from '@constants/COLORS';
import { PLACE_EMOJIS } from '@components/general/PlaceTag/PlaceTag.const';
import { useTheme } from '@hooks/useTheme';

export const PlaceTag = ({
    tag,
    onSelect,
    onTagPress,
    isTagged,
    showAll
}: PlaceTagProps): JSX.Element => {
    const [tagged, setTagged] = useState<boolean>(isTagged);

    const { isDarkMode } = useTheme();

    const onPress = () => {
        if (showAll) {
            setTagged(!tagged);
            onSelect(tag);
        } else {
            onTagPress();
        }
    };

    const backgroundColor = useMemo((): StyleProp<ViewStyle> => {
        const color = isDarkMode ? COLORS.MAIN_BLUE : COLORS.WHITE;

        return (
            tagged && {
                backgroundColor: color,
                borderColor: color
            }
        );
    }, [tagged, isDarkMode]);

    const textColor = useMemo(
        (): StyleProp<TextStyle> =>
            tagged && { color: isDarkMode ? COLORS.WHITE : COLORS.MAIN_BLUE },
        [tagged, isDarkMode]
    );

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={onPress}
            style={[PlaceTagStyle.container, backgroundColor]}
        >
            <Text style={PlaceTagStyle.emoji}>
                {PLACE_EMOJIS[tag as keyof typeof PLACE_EMOJIS]}
            </Text>
            <Text style={[PlaceTagStyle.text, textColor]}>{tag}</Text>
        </TouchableOpacity>
    );
};

PlaceTag.defaultProps = PlaceTagDefaultProps;
