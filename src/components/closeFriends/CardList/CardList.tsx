import React from 'react';
import { Keyboard, VirtualizedList } from 'react-native';
import { CardListProps } from '@components/closeFriends/CardList/CardList.props';
import { CardListStyle } from '@components/closeFriends/CardList/CardList.style';
import { useTabListRenders } from '@hooks/useTabListRenders';

export const CardList = ({ data }: CardListProps): JSX.Element => {
    const { getItem, renderItem, getItemCount, keyExtractor, refreshControl } =
        useTabListRenders(data);

    return (
        <VirtualizedList
            data={data}
            getItem={getItem}
            renderItem={renderItem}
            getItemCount={getItemCount}
            keyExtractor={keyExtractor}
            refreshControl={refreshControl}
            initialNumToRender={40}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            onScrollBeginDrag={Keyboard.dismiss}
            style={CardListStyle.tabList}
        />
    );
};
