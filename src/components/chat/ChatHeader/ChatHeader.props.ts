import { RouteProp } from '@react-navigation/native';

export type ChatHeaderParamsProps = RouteProp<
    { params: { firstname: string; profilePicture: string } },
    'params'
>;
