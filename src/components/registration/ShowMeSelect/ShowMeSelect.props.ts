import { StyleProp, ViewStyle } from 'react-native';

export interface ShowMeSelectProps {
    showMe: string;
    onSelect: (value: string) => void;
    style?: StyleProp<ViewStyle>;
}

export const ShowMeSelectDefaultProps: Omit<
    ShowMeSelectProps,
    'showMe' | 'onSelect'
> = {
    style: {}
};
