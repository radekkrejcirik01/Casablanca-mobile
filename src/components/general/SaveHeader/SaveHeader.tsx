import React, { useCallback, useMemo } from 'react';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { ReducerProps } from '@store/index.props';
import { setSaveVisible } from '@store/SaveReducer';
import { SaveHeaderStyle } from '@components/general/SaveHeader/SaveHeader.style';

export const SaveHeader = (): JSX.Element => {
    const isVisible = useSelector(
        (state: ReducerProps) => state.save.isVisible
    );
    const dispatch = useDispatch();

    const onPressButton = useCallback(() => {
        dispatch(setSaveVisible(false));
    }, [dispatch]);

    return useMemo(
        (): JSX.Element =>
            isVisible ? (
                <TouchableOpacity
                    onPress={onPressButton}
                    style={SaveHeaderStyle.container}
                >
                    <Text style={SaveHeaderStyle.text}>Save</Text>
                </TouchableOpacity>
            ) : null,
        [isVisible, onPressButton]
    );
};
