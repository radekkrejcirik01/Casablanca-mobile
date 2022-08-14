import React, { useCallback, useMemo } from 'react';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { HeaderSaveStyle } from '@components/general/HeaderSave/HeaderSave.style';
import { ReducerProps } from '@store/index.props';
import { setSaveVisible } from '@store/SaveReducer';

export const HeaderSave = (): JSX.Element => {
    const isVisible = useSelector(
        (state: ReducerProps) => state.save.isVisible
    );

    const dispatch = useDispatch();

    const onPress = useCallback(() => {
        dispatch(setSaveVisible(false));
    }, [dispatch]);

    const saveButton = useMemo(
        (): JSX.Element =>
            isVisible ? (
                <TouchableOpacity
                    onPress={onPress}
                    style={HeaderSaveStyle.container}
                >
                    <Text style={HeaderSaveStyle.text}>Save</Text>
                </TouchableOpacity>
            ) : null,
        [isVisible, onPress]
    );

    return saveButton;
};
