import React from 'react';
import { View } from 'react-native';
import { ShowMeSelectEnum } from '@components/registration/ShowMeSelect/ShowMeSelect.enum';
import {
    ShowMeSelectDefaultProps,
    ShowMeSelectProps
} from '@components/registration/ShowMeSelect/ShowMeSelect.props';
import { SelectBox } from '@components/registration/SelectBox/SelectBox';

export const ShowMeSelect = ({
    showMe,
    onSelect,
    style
}: ShowMeSelectProps): JSX.Element => (
    <View style={style}>
        <SelectBox
            onPressIn={() => onSelect(1)}
            title={ShowMeSelectEnum.WOMEN}
            value={showMe === 1}
        />
        <SelectBox
            onPressIn={() => onSelect(0)}
            title={ShowMeSelectEnum.MEN}
            value={showMe === 0}
        />
        <SelectBox
            onPressIn={() => onSelect(2)}
            title={ShowMeSelectEnum.ALL}
            value={showMe === 2}
        />
    </View>
);

ShowMeSelect.defaultProps = ShowMeSelectDefaultProps;
