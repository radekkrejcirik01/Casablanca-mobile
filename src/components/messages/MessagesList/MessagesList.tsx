import React from 'react';
import { Text, VirtualizedList } from 'react-native';
import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';
import { MessagesListStyle } from '@components/messages/MessagesList/MessagesList.style';
import { MessagesListProps } from '@components/messages/MessagesList/MessagesList.props';
import { useNavigation } from '@hooks/useNavigation';
import { useMessagesListRenders } from '@hooks/useMessagesListRenders';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { MessagesStackNavigatorEnum } from '@navigation/StackNavigators/messages/MessagesStackNavigator.enum';

export const MessagesList = ({ data }: MessagesListProps): JSX.Element => {
    const { navigateTo } = useNavigation(RootStackNavigatorEnum.MessagesStack);

    const onPress = (item: CardDataProps) => {
        navigateTo(MessagesStackNavigatorEnum.ChatScreen);
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
