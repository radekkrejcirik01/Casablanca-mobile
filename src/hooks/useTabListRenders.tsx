import React, { useCallback, useState } from 'react';
import { ListRenderItemInfo, RefreshControl } from 'react-native';
import { TabListDataProps } from '@components/closeFriends/CardList/CardList.props';
import { Card } from '@components/closeFriends/Card/Card';

export const useTabListRenders = (
    data: Array<TabListDataProps>
): {
    getItem: (
        listData: Array<TabListDataProps>,
        index: number
    ) => TabListDataProps;
    renderItem: ({ item }: ListRenderItemInfo<TabListDataProps>) => JSX.Element;
    getItemCount: () => number;
    keyExtractor: (item: TabListDataProps, index: number) => string;
    refreshControl: JSX.Element;
} => {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);

    const getItem = (
        listData: Array<TabListDataProps>,
        index: number
    ): TabListDataProps => listData[index];

    const renderItem = ({
        item
    }: ListRenderItemInfo<TabListDataProps>): JSX.Element => (
        <Card item={item} />
    );

    const getItemCount = useCallback((): number => data?.length, [data]);

    // TODO: change to item's ID
    const keyExtractor = (item: TabListDataProps, index: number): string =>
        item.name + index;

    const refreshControl = (
        <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="white"
        />
    );

    return { getItem, renderItem, getItemCount, keyExtractor, refreshControl };
};
