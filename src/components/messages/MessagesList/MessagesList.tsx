import React from 'react';
import { Text, VirtualizedList } from 'react-native';
import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';
import { MessagesListStyle } from '@components/messages/MessagesList/MessagesList.style';
import { TabBarScreens } from '@navigation/navigation.enum';
import { MessagesListProps } from '@components/messages/MessagesList/MessagesList.props';
import { useNavigation } from '@hooks/useNavigation';
import { useMessagesListRenders } from '@hooks/useMessagesListRenders';

export const MessagesList = ({ data }: MessagesListProps): JSX.Element => {
    const { navigateTo } = useNavigation();

    const onPress = (item: CardDataProps) => {
        navigateTo(TabBarScreens.ChatScreen);
    };

    const { getItem, renderItem, getItemCount, keyExtractor, refreshControl } =
        useMessagesListRenders(data, onPress);

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
                contentContainerStyle={MessagesListStyle.container}
            />
        </>
    );
};
