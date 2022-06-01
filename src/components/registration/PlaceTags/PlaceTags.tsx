import React from 'react';
import { View } from 'react-native';
import { PLACE_TAGS } from '@components/registration/PlaceTags/PlaceTags.const';
import { PlaceTag } from '@components/general/PlaceTag/PlaceTag';
import { PlaceTagsStyle } from '@components/registration/PlaceTags/PlaceTags.style';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerProps } from '@store/index.props';
import { addTagAction, removeTagAction } from '@store/RegistrationReducer';

export const PlaceTags = (): JSX.Element => {
    const tags = useSelector((state: ReducerProps) => state.registration.tags);

    const dispatch = useDispatch();

    const pushTags = (value: string) => {
        if (!tags.includes(value)) {
            dispatch(addTagAction(value));
        } else {
            dispatch(removeTagAction(value));
        }
    };

    return (
        <View style={PlaceTagsStyle.container}>
            {PLACE_TAGS.map((value) => (
                <PlaceTag
                    key={value}
                    tag={value}
                    onSelect={(tag: string) => pushTags(tag)}
                />
            ))}
        </View>
    );
};
