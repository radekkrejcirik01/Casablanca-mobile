import { useCallback, useEffect, useRef } from 'react';
import { AppState, AppStateStatus } from 'react-native';
import { useSelector } from 'react-redux';
import { updateRequest } from '@utils/Axios/Axios.service';
import {
    LastActiveInterface,
    ResponseInterface
} from '@models/Registration/Registration.interface';
import { ReducerProps } from '@store/index.props';
import { getDateAndTime } from '@functions/getDateAndTime';

export const useLastActive = () => {
    const { email } = useSelector((state: ReducerProps) => state.user);

    const appState = useRef(AppState.currentState);

    const updateLastActive = useCallback(() => {
        updateRequest<ResponseInterface, LastActiveInterface>(
            'user/lastActive/update',
            {
                email,
                lastActive: getDateAndTime()
            }
        ).subscribe();
    }, [email]);

    useEffect(() => {
        if (email) {
            updateLastActive();
        }
    }, [email, updateLastActive]);

    useEffect(() => {
        const subscription = AppState.addEventListener(
            'change',
            (nextAppState: AppStateStatus) => {
                if (
                    appState.current.match(/inactive|background/) &&
                    nextAppState === 'active' &&
                    email
                ) {
                    updateLastActive();
                }

                appState.current = nextAppState;
            }
        );

        return () => {
            subscription.remove();
        };
    }, [email, updateLastActive]);
};
