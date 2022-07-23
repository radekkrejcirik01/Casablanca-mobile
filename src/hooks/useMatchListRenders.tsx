import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';
import { MatchItem } from '@components/messages/MatchItem/MatchItem';

export const useMatchListRenders = (
    data: Array<CardDataProps>,
    onItemPress: (item: CardDataProps) => void
): {
    getItem: (listData: Array<CardDataProps>, index: number) => CardDataProps;
    renderItem: ({ item }: ListRenderItemInfo<CardDataProps>) => JSX.Element;
    getItemCount: () => number;
    keyExtractor: (item: CardDataProps, index: number) => string;
} => {
    const getItem = (
        listData: Array<CardDataProps>,
        index: number
    ): CardDataProps => listData[index];

    const renderItem = ({
        item
    }: ListRenderItemInfo<CardDataProps>): JSX.Element => (
        <MatchItem key={item.name} item={item} onPress={onItemPress} />
    );

    const getItemCount = (): number => data?.length;

    // TODO: change to item's ID
    const keyExtractor = (item: CardDataProps, index: number): string =>
        item.name + index;

    return { getItem, renderItem, getItemCount, keyExtractor };
};
