import { ModalProps } from '@components/general/Modal/Modal.props';

export interface InfoModalProps extends Omit<ModalProps, 'content'> {
    title: string;
    description: string;
}
