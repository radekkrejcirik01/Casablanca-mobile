import React, { useCallback } from 'react';
import { ListRenderItemInfo, VirtualizedList } from 'react-native';
import { MatchListProps } from '@components/messages/MatchList/MatchList.props';
import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';
import { MatchListStyle } from '@components/messages/MatchList/MatchList.style';
import { MatchItem } from '@components/messages/MatchItem/MatchItem';

export const MatchList = ({ data }: MatchListProps): JSX.Element => {
    const onPress = (item: CardDataProps) => {
        console.log(item.name);
    };

    const getItem = (
        listData: Array<CardDataProps>,
        index: number
    ): CardDataProps => listData[index];

    const renderItem = ({
        item
    }: ListRenderItemInfo<CardDataProps>): JSX.Element => (
        <MatchItem key={item.name} item={item} onPress={onPress} />
    );

    const getItemCount = (): number => data.length;

    // TODO: change to item's ID
    const keyExtractor = (item: CardDataProps, index: number) =>
        item.name + index;

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
