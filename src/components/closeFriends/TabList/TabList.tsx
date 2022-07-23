import React from 'react';
import {
    Keyboard,
    ListRenderItemInfo,
    Text,
    View,
    VirtualizedList
} from 'react-native';
import {
    TabListDataProps,
    TabListProps
} from '@components/closeFriends/TabList/TabList.props';
import { Tab } from '@components/closeFriends/Tab/Tab';

export const TabList = ({ data }: TabListProps): JSX.Element => {
    const getItem = (
        listData: Array<TabListDataProps>,
        index: number
    ): TabListDataProps => listData[index];

    const renderItem = ({
        item
    }: ListRenderItemInfo<TabListDataProps>): JSX.Element => (
        <Tab item={item} />
    );

    const getItemCount = (): number => data.length;

    // TODO: change to item's ID
    const keyExtractor = (item: TabListDataProps, index: number): string =>
        item.name + index;

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
        />
    );
};
