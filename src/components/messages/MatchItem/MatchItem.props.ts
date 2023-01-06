import { MatchListDataProps } from '@components/messages/MatchList/MatchList.props';

export interface MatchItemProps {
    item: MatchListDataProps;
    onPress: (item: MatchListDataProps) => void;
}
