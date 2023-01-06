import React from 'react';
import { View } from 'react-native';
import { GenderSelectEnum } from '@components/registration/GenderSelect/GenderSelect.enum';
import {
    GenderSelectDefaultProps,
    GenderSelectProps
} from '@components/registration/GenderSelect/GenderSelect.props';
import { SelectBox } from '@components/registration/SelectBox/SelectBox';

export const GenderSelect = ({
    gender,
    onSelect,
    style
}: GenderSelectProps): JSX.Element => (
    <View style={style}>
        <SelectBox
            onPressIn={() => onSelect(1)}
            title={GenderSelectEnum.WOMAN}
            value={gender === 1}
        />
        <SelectBox
            onPressIn={() => onSelect(0)}
            title={GenderSelectEnum.MAN}
            value={gender === 0}
        />
    </View>
);

GenderSelect.defaultProps = GenderSelectDefaultProps;
