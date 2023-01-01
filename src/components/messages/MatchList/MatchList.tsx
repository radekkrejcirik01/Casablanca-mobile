import React, { useCallback, useEffect, useState } from 'react';
import { VirtualizedList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { MatchListStyle } from '@components/messages/MatchList/MatchList.style';
import { useMatchListRenders } from '@hooks/useMatchListRenders';
import { MatchListDataProps } from '@components/messages/MatchList/MatchList.props';
import { postRequest } from '@utils/Axios/Axios.service';
import {
    MatchesGetInterface,
    MatchesResponseInterface
} from '@models/Registration/Registration.interface';
import { ReducerProps } from '@store/index.props';
import { useNavigation } from '@hooks/useNavigation';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { MessagesStackNavigatorEnum } from '@navigation/StackNavigators/messages/MessagesStackNavigator.enum';
import { setPerformLoadMatchesAction } from '@store/MessagingReducer';

export const MatchList = (): JSX.Element => {
    const { email } = useSelector((state: ReducerProps) => state.user);
    const { performLoadMatches } = useSelector(
        (state: ReducerProps) => state.messaging
    );
    const dispatch = useDispatch();

    const [data, setData] = useState<Array<MatchListDataProps>>([]);

    const loadMatches = useCallback(() => {
        postRequest<MatchesResponseInterface, MatchesGetInterface>(
            'https://26399civx6.execute-api.eu-central-1.amazonaws.com/messages/get/matches/0',
            {
                email
            }
        ).subscribe((response: MatchesResponseInterface) => {
            if (response?.status) {
                setData(response?.data);
            }
        });
    }, [email]);

    useEffect(() => {
        if (performLoadMatches) {
            loadMatches();
            dispatch(setPerformLoadMatchesAction(false));
        }
    }, [dispatch, loadMatches, performLoadMatches]);

    const { navigateTo } = useNavigation(
        RootStackNavigatorEnum.MessagesStack,
        loadMatches
    );

    const onPress = useCallback(
        (item: MatchListDataProps) => {
            navigateTo(MessagesStackNavigatorEnum.ChatScreen, {
                user: item.email,
                firstname: item.firstname,
                profilePicture: item.profilePicture
            });
        },
        [navigateTo]
    );

    const { getItem, renderItem, getItemCount, keyExtractor } =
        useMatchListRenders(data, onPress);

    return (
        <VirtualizedList
            data={data}
            getItem={getItem}
            renderItem={renderItem}
            getItemCount={getItemCount}
            keyExtractor={keyExtractor}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={MatchListStyle.flatList}
        />
    );
};
