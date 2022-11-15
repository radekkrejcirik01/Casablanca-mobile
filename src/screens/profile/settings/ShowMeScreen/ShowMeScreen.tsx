import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ShowMeSelect } from '@components/registration/ShowMeSelect/ShowMeSelect';
import { ReducerProps } from '@store/index.props';
import { ShowMeScreenStyle } from '@screens/profile/settings/ShowMeScreen/ShowMeScreen.style';
import { setSaveVisible } from '@store/SaveReducer';
import { setShowMeAction } from '@store/UserReducer';

export const ShowMeScreen = (): JSX.Element => {
    const showMe = useSelector((state: ReducerProps) => state.user.showMe);
    const isVisible = useSelector(
        (state: ReducerProps) => state.save.isVisible
    );
    const dispatch = useDispatch();

    const [showMeValue, setShowMeValue] = useState<number>(showMe);

    useEffect(() => {
        dispatch(setSaveVisible(false));
    }, [dispatch]);

    useEffect(() => {
        if (!isVisible && showMe !== showMeValue) {
            dispatch(setShowMeAction(showMeValue));
        }
    }, [dispatch, isVisible, showMe, showMeValue]);

    const onSelect = useCallback(
        (value: number) => {
            setShowMeValue(value);
            if (value !== showMe) {
                dispatch(setSaveVisible(true));
            } else {
                dispatch(setSaveVisible(false));
            }
        },
        [dispatch, showMe]
    );

    return (
        <SafeAreaProvider>
            <ShowMeSelect
                showMe={showMeValue}
                onSelect={onSelect}
                style={ShowMeScreenStyle.select}
            />
        </SafeAreaProvider>
    );
};
