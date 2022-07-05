import React, { useCallback } from 'react';
import { FlatList, ListRenderItemInfo, RefreshControl } from 'react-native';
import { MatchListProps } from '@components/chat/MatchList/MatchList.props';
import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';
import { ChatItem } from '@components/chat/ChatItem/ChatItem';
import { ChatListStyle } from '@components/chat/ChatList/ChatList.style';

export const ChatList = ({ data }: MatchListProps): JSX.Element => {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    const onPress = (item: CardDataProps) => {
        console.log(item.name);
    };

    return (
        <FlatList
            data={data}
            renderItem={(item: ListRenderItemInfo<CardDataProps>) => (
                <ChatItem
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
            style={ChatListStyle.flatList}
        />
    );
};
