import React, { useCallback } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { Continue } from '@components/registration/Continue/Continue';
import { Title } from '@components/general/Title/Title';
import { PlaceTags } from '@components/general/PlaceTags/PlaceTags';
import { TagsScreenStyle } from '@screens/registration/TagsScreen/TagsScreen.style';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { useNavigation } from '@hooks/useNavigation';
import { RegistrationStackNavigatorEnum } from '@navigation/StackNavigators/registration/RegistrationStackNavigator.enum';
import { ReducerProps } from '@store/index.props';
import { addTagAction, removeTagAction } from '@store/RegistrationReducer';

export const TagsScreen = (): JSX.Element => {
    const tags = useSelector((state: ReducerProps) => state.registration.tags);
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

    const continuePressed = useCallback(
        () => navigateTo(RegistrationStackNavigatorEnum.GenderScreen),
        [navigateTo]
    );

    return (
        <SafeAreaProvider>
            <Title title="Fave places to go" />
            <PlaceTags
                onSelect={onSelect}
                tags={tags}
                showAll
                style={TagsScreenStyle.placeTags}
            />
            <Continue onPress={continuePressed} />
        </SafeAreaProvider>
    );
};
