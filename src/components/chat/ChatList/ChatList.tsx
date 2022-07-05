import React, { useCallback } from 'react';
import {
    FlatList,
    ListRenderItemInfo,
    RefreshControl,
    Text
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';
import { ChatItem } from '@components/chat/ChatItem/ChatItem';
import { ChatListStyle } from '@components/chat/ChatList/ChatList.style';
import { TabBarScreens } from '@navigation/navigation.enum';
import { ChatListProps } from '@components/chat/ChatList/ChatList.props';

export const ChatList = ({ data }: ChatListProps): JSX.Element => {
    const [refreshing, setRefreshing] = React.useState(false);

    const navigation = useNavigation();

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);

    const onPress = (item: CardDataProps) => {
        navigation.navigate(TabBarScreens.ConversationScreen);
    };

    return (
        <>
            <Text style={ChatListStyle.title}>Messages</Text>
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
                contentContainerStyle={ChatListStyle.container}
            />
        </>
    );
};
