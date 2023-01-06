export interface ProfileScrollViewProps {
    source: string;
    children: JSX.Element;
}

export interface ProfileScrollViewForwardedRefProps {
    scrollToInfo: () => void;
}
