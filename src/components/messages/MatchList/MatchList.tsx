import React, { useEffect, useState } from 'react';
import { VirtualizedList } from 'react-native';
import { useSelector } from 'react-redux';
import { MatchListStyle } from '@components/messages/MatchList/MatchList.style';
import { useMatchListRenders } from '@hooks/useMatchListRenders';
import { MatchListDataProps } from '@components/messages/MatchList/MatchList.props';
import { postRequest } from '@utils/Axios/Axios.service';
import {
    MatchesGetInterface,
    MatchesResponseInterface
} from '@models/Registration/Registration.interface';
import { ReducerProps } from '@store/index.props';

export const MatchList = (): JSX.Element => {
    const { email } = useSelector((state: ReducerProps) => state.user);

    const [data, setData] = useState<Array<MatchListDataProps>>([]);

    const onPress = (item: MatchListDataProps) => {};

    const { getItem, renderItem, getItemCount, keyExtractor } =
        useMatchListRenders(data, onPress);

    useEffect(() => {
        postRequest<MatchesResponseInterface, MatchesGetInterface>(
            'https://26399civx6.execute-api.eu-central-1.amazonaws.com/messages/get/matches/0',
            {
                email
            }
        ).subscribe((response: MatchesResponseInterface) => {
            setData(response.data);
        });
    }, [email]);

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
