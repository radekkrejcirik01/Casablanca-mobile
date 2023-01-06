import React, { useCallback, useMemo } from 'react';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { SaveButtonStyle } from '@components/general/SaveButton/SaveButton.style';
import { ReducerProps } from '@store/index.props';
import { setSaveVisible } from '@store/SaveReducer';
import {
    SaveButtonDefaultProps,
    SaveButtonProps
} from '@components/general/SaveButton/SaveButton.props';

export const SaveButton = ({ onPress }: SaveButtonProps): JSX.Element => {
    const isVisible = useSelector(
        (state: ReducerProps) => state.save.isVisible
    );
    const dispatch = useDispatch();

    const onPressButton = useCallback(() => {
        onPress();
        dispatch(setSaveVisible(false));
    }, [dispatch, onPress]);

    const saveButton = useMemo(
        (): JSX.Element =>
            isVisible ? (
                <TouchableOpacity
                    onPress={onPressButton}
                    style={SaveButtonStyle.container}
                >
                    <Text style={SaveButtonStyle.text}>Save</Text>
                </TouchableOpacity>
            ) : null,
        [isVisible, onPressButton]
    );

    return saveButton;
};

SaveButton.defaultProps = SaveButtonDefaultProps;
