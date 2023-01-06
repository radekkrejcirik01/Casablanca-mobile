import { StyleProp, TextStyle } from 'react-native';

export interface TitleProps {
    title: string;
    style?: StyleProp<TextStyle>;
}

export const TitleDefaultProps: Omit<TitleProps, 'title'> = {
    style: null
};
