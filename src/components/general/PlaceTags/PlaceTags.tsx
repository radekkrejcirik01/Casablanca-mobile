import React, { useMemo } from 'react';
import { View } from 'react-native';
import { ALL_PLACE_TAGS } from '@components/general/PlaceTags/PlaceTags.const';
import { PlaceTag } from '@components/general/PlaceTag/PlaceTag';
import { PlaceTagsStyle } from '@components/general/PlaceTags/PlaceTags.style';
import {
    PlaceTagsDefaultProps,
    PlaceTagsProps
} from '@components/general/PlaceTags/PlaceTags.props';

export const PlaceTags = ({
    tags,
    showAll,
    style
}: PlaceTagsProps): JSX.Element => {
    const data = useMemo(
        (): Array<string> => (showAll ? ALL_PLACE_TAGS : tags),
        [showAll, tags]
    );

    const onSelect = (tag: string) => {
        console.log(tag);
    };

    return (
        <View style={[PlaceTagsStyle.container, style]}>
            {data?.map((value: string) => (
                <PlaceTag
                    key={value}
                    tag={value}
                    onSelect={onSelect}
                    isTagged={tags.includes(value)}
                    showAll={showAll}
                />
            ))}
        </View>
    );
};

PlaceTags.defaultProps = PlaceTagsDefaultProps;
