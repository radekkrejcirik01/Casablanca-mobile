import React, { useMemo } from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import {
    SafeAreaProvider,
    useSafeAreaInsets
} from 'react-native-safe-area-context';
import { InfoProfileScreenStyle } from '@screens/general/InfoProfileScreen/InfoProfileScreen.style';
import { IconEnum } from '@components/icon/Icon.enum';
import { IconButton } from '@components/general/IconButton/IconButton';
import {
    InfoProfileScreenDefaultProps,
    InfoProfileScreenProps
} from '@screens/general/InfoProfileScreen/InfoProfileScreen.props';

export const InfoProfileScreen = ({
    onClose,
    info
}: InfoProfileScreenProps): JSX.Element => {
    const { top } = useSafeAreaInsets();

    const marginTop = useMemo(
        (): StyleProp<ViewStyle> => ({ marginTop: top }),
        [top]
    );

    return (
        <SafeAreaProvider style={[InfoProfileScreenStyle.safeArea, marginTop]}>
            <View style={InfoProfileScreenStyle.buttonIconView}>
                <IconButton icon={IconEnum.CLOSE} onPress={onClose} />
            </View>
            <Text>{info?.name}</Text>
            <Text>{info?.age}</Text>
        </SafeAreaProvider>
    );
};

InfoProfileScreen.deafultProps = InfoProfileScreenDefaultProps;
