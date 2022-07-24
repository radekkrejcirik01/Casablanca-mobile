import React, { useRef } from 'react';
import { Animated, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ProfileImageViewProps } from '@components/profile/ProfileImageView.props';
import { ProfileImageViewStyle } from '@components/profile/ProfileImageView.style';
import { IconEnum } from '@components/icon/Icon.enum';
import { IconButton } from '@components/general/IconButton/IconButton';
import { useNavigation } from '@hooks/useNavigation';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';

export const ProfileImageView = ({
    source,
    children
}: ProfileImageViewProps): JSX.Element => {
    const { navigateTo } = useNavigation(RootStackNavigatorEnum.ProfileStack);

    const window = Dimensions.get('window');

    const HEADER_HEIGHT_EXPANDED = 35;
    const HEADER_HEIGHT_NARROWED = (60 / 100) * window.height - 85;

    const AnimatedImageBackground = Animated.createAnimatedComponent(FastImage);

    const scrollY = useRef(new Animated.Value(0)).current;

    const openSettings = () => {
        navigateTo(RootStackNavigatorEnum.ProfileStack);
    };

    return (
        <Animated.ScrollView
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event(
                [
                    {
                        nativeEvent: {
                            contentOffset: { y: scrollY }
                        }
                    }
                ],
                { useNativeDriver: true }
            )}
        >
            <AnimatedImageBackground
                source={require('../../assets/images/profilovka.png')}
                style={[
                    ProfileImageViewStyle.animatedImage,
                    {
                        height: HEADER_HEIGHT_EXPANDED + HEADER_HEIGHT_NARROWED,
                        transform: [
                            {
                                scale: scrollY.interpolate({
                                    inputRange: [-200, 0],
                                    outputRange: [2, 1],
                                    extrapolateLeft: 'extend',
                                    extrapolateRight: 'clamp'
                                })
                            }
                        ]
                    }
                ]}
            >
                <IconButton
                    icon={IconEnum.SETTINGS}
                    onPress={openSettings}
                    size={24}
                    style={ProfileImageViewStyle.settingsIcon}
                />
            </AnimatedImageBackground>
            {children}
        </Animated.ScrollView>
    );
};
