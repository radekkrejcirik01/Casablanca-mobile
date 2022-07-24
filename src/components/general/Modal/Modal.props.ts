export interface ModalProps {
    isVisible: boolean;
    content: JSX.Element;
    onClose: () => void;
}
