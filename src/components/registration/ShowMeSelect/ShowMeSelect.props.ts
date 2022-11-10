import { StyleProp, ViewStyle } from 'react-native';
import { ShowMeSelectEnum } from '@components/registration/ShowMeSelect/ShowMeSelect.enum';

export interface ShowMeSelectProps {
    showMe: string;
    onSelect: (value: ShowMeSelectEnum) => void;
    style?: StyleProp<ViewStyle>;
}

export const ShowMeSelectDefaultProps: Omit<
    ShowMeSelectProps,
    'showMe' | 'onSelect'
> = {
    style: {}
};
