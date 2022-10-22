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
            onPressIn={() => onSelect(GenderSelectEnum.WOMAN)}
            title={GenderSelectEnum.WOMAN}
            value={gender === GenderSelectEnum.WOMAN}
        />
        <SelectBox
            onPressIn={() => onSelect(GenderSelectEnum.MAN)}
            title={GenderSelectEnum.MAN}
            value={gender === GenderSelectEnum.MAN}
        />
    </View>
);

GenderSelect.defaultProps = GenderSelectDefaultProps;
