import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { IconEnum } from '@components/icon/Icon.enum';
import { Icon } from '@components/icon/Icon';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';

export const HeaderLeft = (): JSX.Element => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name={IconEnum.BACK} size={24} />
        </TouchableOpacity>
    );
};
