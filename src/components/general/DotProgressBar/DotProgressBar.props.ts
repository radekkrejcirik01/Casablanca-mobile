import { Omit, StyleProp, ViewStyle } from 'react-native';

export interface DotProgressBarProps {
    pagesNumber: number;
    currentPage: number;
    style?: StyleProp<ViewStyle>;
}

export const DotProgressBarDefaultProps: Omit<
    DotProgressBarProps,
    'pagesNumber' | 'currentPage'
> = {
    style: {}
};
