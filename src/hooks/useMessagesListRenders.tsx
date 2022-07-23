import React, { useCallback, useState } from 'react';
import { ListRenderItemInfo, RefreshControl } from 'react-native';
import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';
import { MessagesItem } from '@components/messages/MessagesItem/MessagesItem';

export const useMessagesListRenders = (
    data: Array<CardDataProps>,
    onItemPress: (item: CardDataProps) => void
): {
    getItem: (listData: Array<CardDataProps>, index: number) => CardDataProps;
    renderItem: ({ item }: ListRenderItemInfo<CardDataProps>) => JSX.Element;
    getItemCount: () => number;
    keyExtractor: (item: CardDataProps, index: number) => string;
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
        listData: Array<CardDataProps>,
        index: number
    ): CardDataProps => listData[index];

    const renderItem = ({
        item
    }: ListRenderItemInfo<CardDataProps>): JSX.Element => (
        <MessagesItem key={item.name} item={item} onPress={onItemPress} />
    );

    const getItemCount = useCallback((): number => data?.length, [data]);

    // TODO: change to item's ID
    const keyExtractor = (item: CardDataProps, index: number): string =>
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
