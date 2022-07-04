import React from 'react';
import { FlatList } from 'react-native';
import { MatchListProps } from '@components/chat/MatchList/MatchList.props';
import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';
import { ChatItem } from '@components/chat/ChatItem/ChatItem';
import { ChatListStyle } from '@components/chat/ChatList/ChatList.style';

export const ChatList = ({ data }: MatchListProps): JSX.Element => {
    const onPress = (item: CardDataProps) => {
        console.log(item.name);
    };
    return (
        <FlatList
            data={data}
            renderItem={(item) => (
                <ChatItem
                    key={item.item.name}
                    item={item.item}
                    onPress={onPress}
                />
            )}
            showsVerticalScrollIndicator={false}
            style={ChatListStyle.flatList}
        />
    );
};
