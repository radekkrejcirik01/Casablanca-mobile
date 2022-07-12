import React, { useCallback, useState } from 'react';
import {
    FlatList,
    ListRenderItemInfo,
    RefreshControl,
    Text
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

    return (
        <>
            <Text style={MessagesListStyle.title}>Messages</Text>
            <FlatList
                data={data}
                renderItem={(item: ListRenderItemInfo<CardDataProps>) => (
                    <MessagesItem
                        key={item.item.name}
                        item={item.item}
                        onPress={onPress}
                    />
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        tintColor="white"
                    />
                }
                showsVerticalScrollIndicator={false}
                style={MessagesListStyle.flatList}
                contentContainerStyle={MessagesListStyle.container}
            />
        </>
    );
};
