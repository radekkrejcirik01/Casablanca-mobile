import React from 'react';
import { Keyboard, VirtualizedList } from 'react-native';
import { TabListProps } from '@components/closeFriends/TabList/TabList.props';
import { TabListStyle } from '@components/closeFriends/TabList/TabList.style';
import { useTabListRenders } from '@hooks/useTabListRenders';

export const TabList = ({ data }: TabListProps): JSX.Element => {
    const { getItem, renderItem, getItemCount, keyExtractor } =
        useTabListRenders(data);

    return (
        <VirtualizedList
            data={data}
            getItem={getItem}
            renderItem={renderItem}
            getItemCount={getItemCount}
            keyExtractor={keyExtractor}
            initialNumToRender={40}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            onScrollBeginDrag={Keyboard.dismiss}
            style={TabListStyle.tabList}
        />
    );
};
