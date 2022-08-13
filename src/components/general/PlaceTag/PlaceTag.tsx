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

export const PlaceTag = ({
    tag,
    onSelect,
    isTagged,
    showAll
}: PlaceTagProps): JSX.Element => {
    const [tagged, setTagged] = useState<boolean>(isTagged);

    const onPress = () => {
        if (showAll) {
            setTagged(!tagged);
            onSelect(tag);
        }
    };

    const backgroundColor = useMemo(
        (): StyleProp<ViewStyle> =>
            tagged && {
                backgroundColor: COLORS.WHITE
            },
        [tagged]
    );

    const color = useMemo(
        (): StyleProp<TextStyle> => tagged && { color: COLORS.MAIN_BLUE },
        [tagged]
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
            <Text style={[PlaceTagStyle.text, color]}>{tag}</Text>
        </TouchableOpacity>
    );
};

PlaceTag.defaultProps = PlaceTagDefaultProps;
