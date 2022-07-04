import React, { useRef } from 'react';
import { Animated, Dimensions, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ProfileImageViewProps } from '@components/profile/ProfileImageView.props';
import { ProfileImageViewStyle } from '@components/profile/ProfileImageView.style';

export const ProfileImageView = ({
    source,
    children
}: ProfileImageViewProps): JSX.Element => {
    const window = Dimensions.get('window');

    const HEADER_HEIGHT_EXPANDED = 35;
    const HEADER_HEIGHT_NARROWED = (60 / 100) * window.height - 85;

    const AnimatedImageBackground = Animated.createAnimatedComponent(FastImage);

    const scrollY = useRef(new Animated.Value(0)).current;

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
                <View style={ProfileImageViewStyle.animatedImageOpacity} />
            </AnimatedImageBackground>
            {children}
        </Animated.ScrollView>
    );
};
