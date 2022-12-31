import React, { useEffect, useState } from 'react';
import { Text, VirtualizedList } from 'react-native';
import { useSelector } from 'react-redux';
import { MessagesListStyle } from '@components/messages/MessagesList/MessagesList.style';
import { useNavigation } from '@hooks/useNavigation';
import { useMessagesListRenders } from '@hooks/useMessagesListRenders';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { MessagesStackNavigatorEnum } from '@navigation/StackNavigators/messages/MessagesStackNavigator.enum';
import { ReducerProps } from '@store/index.props';
import { MessagesListDataProps } from '@components/messages/MessagesList/MessagesList.props';
import { postRequest } from '@utils/Axios/Axios.service';
import {
    ConversationsGetInterface,
    ConversationsResponseInterface
} from '@models/Registration/Registration.interface';

export const MessagesList = (): JSX.Element => {
    const { email } = useSelector((state: ReducerProps) => state.user);

    const { navigateTo } = useNavigation(RootStackNavigatorEnum.MessagesStack);

    const [data, setData] = useState<Array<MessagesListDataProps>>([]);

    const onPress = (item: MessagesListDataProps) => {
        navigateTo(MessagesStackNavigatorEnum.ChatScreen, {
            user: item.email,
            firstname: item.firstname,
            profilePicture: item.profilePicture
        });
    };

    const { getItem, renderItem, getItemCount, keyExtractor, refreshControl } =
        useMessagesListRenders(data, onPress);

    useEffect(() => {
        postRequest<ConversationsResponseInterface, ConversationsGetInterface>(
            'https://26399civx6.execute-api.eu-central-1.amazonaws.com/messages/get/conversations/0',
            {
                email
            }
        ).subscribe((response: ConversationsResponseInterface) => {
            if (response?.status) {
                setData(response?.data);
            }
        });
    }, [email]);

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
