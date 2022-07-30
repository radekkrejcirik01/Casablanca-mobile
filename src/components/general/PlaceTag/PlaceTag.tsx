import React, { useState } from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { PlaceTagProps } from '@components/general/PlaceTag/PlaceTag.props';
import { PlaceTagStyle } from '@components/general/PlaceTag/PlaceTag.style';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import COLORS from '@constants/COLORS';
import { PLACE_EMOJIS } from '@components/general/PlaceTag/PlaceTag.const';
import { ReducerProps } from '@store/index.props';

export const PlaceTag = ({ tag, onSelect }: PlaceTagProps): JSX.Element => {
    const tags = useSelector((state: ReducerProps) => state.registration.tags);
    const [tagged, setTagged] = useState<boolean>(tags.includes(tag));
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
                setTagged(!tagged);
                onSelect(tag);
            }}
            style={[
                PlaceTagStyle.container,
                !tagged && {
                    borderColor: COLORS.WHITE
                }
            ]}
        >
            <Text style={PlaceTagStyle.emoji}>
                {PLACE_EMOJIS[tag as keyof typeof PLACE_EMOJIS]}
            </Text>
            <Text style={PlaceTagStyle.text}>{tag}</Text>
        </TouchableOpacity>
    );
};
