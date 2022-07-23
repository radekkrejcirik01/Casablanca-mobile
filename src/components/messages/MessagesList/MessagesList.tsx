import React, { useCallback, useState } from 'react';
import {
    ListRenderItemInfo,
    RefreshControl,
    Text,
    VirtualizedList
} from 'react-native';
import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';
import { MessagesItem } from '@components/messages/MessagesItem/MessagesItem';
import { MessagesListStyle } from '@components/messages/MessagesList/MessagesList.style';
import { TabBarScreens } from '@navigation/navigation.enum';
import { MessagesListProps } from '@components/messages/MessagesList/MessagesList.props';
import { useNavigation } from '@hooks/useNavigation';

export const MessagesList = ({ data }: MessagesListProps): JSX.Element => {
    const [refreshing, setRefreshing] = useState(false);

    const { navigateTo } = useNavigation();

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);

    const onPress = (item: CardDataProps) => {
        navigateTo(TabBarScreens.ChatScreen);
    };

    const getItem = (
        listData: Array<CardDataProps>,
        index: number
    ): CardDataProps => listData[index];

    const renderItem = ({
        item
    }: ListRenderItemInfo<CardDataProps>): JSX.Element => (
        <MessagesItem key={item.name} item={item} onPress={onPress} />
    );

    const getItemCount = (): number => data.length;

    // TODO: change to item's ID
    const keyExtractor = (item: CardDataProps, index: number) =>
        item.name + index;

    const refreshControl = (
        <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="white"
        />
    );

    return (
        <>
            <Text style={MessagesListStyle.title}>Messages</Text>
            <VirtualizedList
                data={data}
                getItem={getItem}
                renderItem={renderItem}
                getItemCount={getItemCount}
                keyExtractor={keyExtractor}
                refreshControl={refreshControl}
                showsVerticalScrollIndicator={false}
                style={MessagesListStyle.flatList}
                contentContainerStyle={MessagesListStyle.container}
            />
        </>
    );
};
