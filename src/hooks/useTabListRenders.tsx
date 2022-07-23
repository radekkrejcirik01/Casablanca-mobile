import React, { useCallback } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { TabListDataProps } from '@components/closeFriends/TabList/TabList.props';
import { Tab } from '@components/closeFriends/Tab/Tab';

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
} => {
    const getItem = (
        listData: Array<TabListDataProps>,
        index: number
    ): TabListDataProps => listData[index];

    const renderItem = ({
        item
    }: ListRenderItemInfo<TabListDataProps>): JSX.Element => (
        <Tab item={item} />
    );

    const getItemCount = useCallback((): number => data?.length, [data]);

    // TODO: change to item's ID
    const keyExtractor = (item: TabListDataProps, index: number): string =>
        item.name + index;

    return { getItem, renderItem, getItemCount, keyExtractor };
};
