import React from 'react';
import { VirtualizedList } from 'react-native';
import { MatchListProps } from '@components/messages/MatchList/MatchList.props';
import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';
import { MatchListStyle } from '@components/messages/MatchList/MatchList.style';
import { useMatchListRenders } from '@hooks/useMatchListRenders';

export const MatchList = ({ data }: MatchListProps): JSX.Element => {
    const onPress = (item: CardDataProps) => {
        console.log(item.name);
    };

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
