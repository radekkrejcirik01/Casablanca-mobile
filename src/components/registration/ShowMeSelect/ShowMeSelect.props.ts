import { StyleProp, ViewStyle } from 'react-native';

export interface ShowMeSelectProps {
    showMe: number;
    onSelect: (value: number) => void;
    style?: StyleProp<ViewStyle>;
}

export const ShowMeSelectDefaultProps: Omit<
    ShowMeSelectProps,
    'showMe' | 'onSelect'
> = {
    style: {}
};
