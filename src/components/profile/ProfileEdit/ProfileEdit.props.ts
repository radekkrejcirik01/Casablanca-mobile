import { StyleProp, ViewStyle } from 'react-native';

export interface ProfileEditProps {
    style?: StyleProp<ViewStyle>;
}

export const ProfileEditDefaultProps: ProfileEditProps = {
    style: {}
};
