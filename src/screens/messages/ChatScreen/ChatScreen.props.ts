import { RouteProp } from '@react-navigation/native';

export interface ChatScreenProps {
    route: RouteProp<{ params: { user: string } }, 'params'>;
}
