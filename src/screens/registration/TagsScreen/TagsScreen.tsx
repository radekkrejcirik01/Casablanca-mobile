import React, { useCallback } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Title } from '@components/general/Title/Title';
import { PlaceTags } from '@components/general/PlaceTags/PlaceTags';
import { TagsScreenStyle } from '@screens/registration/TagsScreen/TagsScreen.style';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { useNavigation } from '@hooks/useNavigation';
import { RegistrationStackNavigatorEnum } from '@navigation/StackNavigators/registration/RegistrationStackNavigator.enum';
import { ReducerProps } from '@store/index.props';
import { addTagAction, removeTagAction } from '@store/UserReducer';
import { ContinueButton } from '@components/registration/ContinueButton/ContinueButton';

export const TagsScreen = (): JSX.Element => {
    const tags = useSelector((state: ReducerProps) => state.user.tags);
    const dispatch = useDispatch();

    const { navigateTo } = useNavigation(
        RootStackNavigatorEnum.RegistrationStack
    );

    const onSelect = useCallback(
        (tag: string) => {
            if (tags.includes(tag)) {
                dispatch(removeTagAction(tag));
            } else {
                dispatch(addTagAction(tag));
            }
        },
        [dispatch, tags]
    );

    const continuePressed = useCallback(() => {
        if (tags?.length) {
            navigateTo(RegistrationStackNavigatorEnum.GenderScreen);
        } else {
            Alert.alert('Please select at least 1 favorite place');
        }
    }, [tags?.length, navigateTo]);

    return (
        <>
            <Title
                title="What are your to-go places?"
                style={TagsScreenStyle.title}
            />
            <PlaceTags
                onSelect={onSelect}
                tags={tags}
                showAll
                style={TagsScreenStyle.placeTags}
            />
            <ContinueButton onPress={continuePressed} />
        </>
    );
};
