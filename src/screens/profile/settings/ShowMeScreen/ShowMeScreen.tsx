import React, { useCallback } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ShowMeSelect } from '@components/registration/ShowMeSelect/ShowMeSelect';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerProps } from '@store/index.props';
import { setShowMeAction } from '@store/UserReducer';

export const ShowMeScreen = (): JSX.Element => {
    const showMe = useSelector((state: ReducerProps) => state.user.showMe);

    const dispatch = useDispatch();

    const onSelect = useCallback(
        (value: string) => {
            dispatch(setShowMeAction(value));
        },
        [dispatch]
    );
    return (
        <SafeAreaProvider>
            <ShowMeSelect showMe={showMe} onSelect={onSelect} />
        </SafeAreaProvider>
    );
};
