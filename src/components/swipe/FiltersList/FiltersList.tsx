import React from 'react';
import { ListItem } from '@components/general/ListItem/ListItem';
import { useSettings } from '@hooks/useSettings';

export const FiltersList = (): JSX.Element => {
    const {
        distancePreferenceDescription,
        openDistancePreferenceScreen,
        agePreferenceDescription,
        openAgePreferenceScreen,
        switchTagsValue,
        toggleTags,
        showMeDescription,
        openShowMeScreen
    } = useSettings();

    return (
        <>
            <ListItem
                title="Distance preference"
                description={distancePreferenceDescription}
                hasArrow
                onPress={openDistancePreferenceScreen}
            />
            <ListItem
                title="Age preference"
                description={agePreferenceDescription}
                hasArrow
                onPress={openAgePreferenceScreen}
            />
            <ListItem
                title="Show me"
                description={showMeDescription}
                hasArrow
                onPress={openShowMeScreen}
            />
            <ListItem
                title="Filter by tags"
                hasSwitch
                switchValue={switchTagsValue}
                toggleSwitch={toggleTags}
            />
        </>
    );
};
