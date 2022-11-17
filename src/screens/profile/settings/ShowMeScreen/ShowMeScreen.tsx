import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ShowMeSelect } from '@components/registration/ShowMeSelect/ShowMeSelect';
import { ReducerProps } from '@store/index.props';
import { ShowMeScreenStyle } from '@screens/profile/settings/ShowMeScreen/ShowMeScreen.style';
import { setSaveVisible } from '@store/SaveReducer';
import { setShowMeAction } from '@store/UserReducer';
import { updateRequest } from '@utils/Axios/Axios.service';
import {
    ResponseInterface,
    ShowMeInterface
} from '@models/Registration/Registration.interface';

export const ShowMeScreen = (): JSX.Element => {
    const { email, showMe } = useSelector((state: ReducerProps) => state.user);
    const isVisible = useSelector(
        (state: ReducerProps) => state.save.isVisible
    );
    const dispatch = useDispatch();

    const [showMeValue, setShowMeValue] = useState<number>(showMe);

    useEffect(() => {
        dispatch(setSaveVisible(false));
    }, [dispatch]);

    const saveShowMe = useCallback(() => {
        if (showMeValue !== showMe) {
            updateRequest<ResponseInterface, ShowMeInterface>(
                'user/showMe/update',
                {
                    email,
                    showMe: showMeValue
                }
            ).subscribe();

            dispatch(setShowMeAction(showMeValue));
        }
    }, [dispatch, email, showMe, showMeValue]);

    useEffect(() => {
        if (!isVisible && showMe !== showMeValue) {
            saveShowMe();
        }
    }, [isVisible, saveShowMe, showMe, showMeValue]);

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
