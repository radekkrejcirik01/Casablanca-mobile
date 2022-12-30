import React, { useCallback, useState } from 'react';
import { ListRenderItemInfo, RefreshControl } from 'react-native';
import { MessagesItem } from '@components/messages/MessagesItem/MessagesItem';
import { MessagesListDataProps } from '@components/messages/MessagesList/MessagesList.props';

export const useMessagesListRenders = (
    data: Array<MessagesListDataProps>,
    onItemPress: (item: MessagesListDataProps) => void
): {
    getItem: (
        listData: Array<MessagesListDataProps>,
        index: number
    ) => MessagesListDataProps;
    renderItem: ({
        item
    }: ListRenderItemInfo<MessagesListDataProps>) => JSX.Element;
    getItemCount: () => number;
    keyExtractor: (item: MessagesListDataProps, index: number) => string;
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
        listData: Array<MessagesListDataProps>,
        index: number
    ): MessagesListDataProps => listData[index];

    const renderItem = ({
        item
    }: ListRenderItemInfo<MessagesListDataProps>): JSX.Element => (
        <MessagesItem key={item.email} item={item} onPress={onItemPress} />
    );

    const getItemCount = useCallback((): number => data?.length, [data]);

    const keyExtractor = (item: MessagesListDataProps): string => item.email;

    const refreshControl = (
        <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="white"
        />
    );

    return { getItem, renderItem, getItemCount, keyExtractor, refreshControl };
};
