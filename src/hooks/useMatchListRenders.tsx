import React, { useCallback } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { MatchItem } from '@components/messages/MatchItem/MatchItem';
import { MatchListDataProps } from '@components/messages/MatchList/MatchList.props';

export const useMatchListRenders = (
    data: Array<MatchListDataProps>,
    onItemPress: (item: MatchListDataProps) => void
): {
    getItem: (
        listData: Array<MatchListDataProps>,
        index: number
    ) => MatchListDataProps;
    renderItem: ({
        item
    }: ListRenderItemInfo<MatchListDataProps>) => JSX.Element;
    getItemCount: () => number;
    keyExtractor: (item: MatchListDataProps, index: number) => string;
} => {
    const getItem = (
        listData: Array<MatchListDataProps>,
        index: number
    ): MatchListDataProps => listData[index];

    const renderItem = ({
        item
    }: ListRenderItemInfo<MatchListDataProps>): JSX.Element => (
        <MatchItem key={item.user.email} item={item} onPress={onItemPress} />
    );

    const getItemCount = useCallback((): number => data?.length, [data]);

    const keyExtractor = (item: MatchListDataProps): string => item.user.email;

    return { getItem, renderItem, getItemCount, keyExtractor };
};
