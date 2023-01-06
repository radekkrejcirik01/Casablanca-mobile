import { ViewProps } from 'react-native';

export interface ThemeViewProps extends ViewProps {
    isDefault?: boolean;
}

export const ThemeViewDefaultProps: ThemeViewProps = {
    isDefault: true
};
