import { IconEnum } from '@components/icon/Icon.enum';

export interface IconProps {
    name: IconEnum;
    size?: number;
}

export const IconDefaultProps: Omit<IconProps, 'name'> = {
    size: 30
};
