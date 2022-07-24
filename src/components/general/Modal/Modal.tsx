import React from 'react';
import ModalComponent from 'react-native-modal';
import { ModalProps } from '@components/general/Modal/Modal.props';

export const Modal = ({
    isVisible,
    content,
    onClose
}: ModalProps): JSX.Element => (
    <ModalComponent
        isVisible={isVisible}
        useNativeDriverForBackdrop
        swipeDirection={['down']}
        animationInTiming={450}
        animationOutTiming={450}
        onBackdropPress={onClose}
        onSwipeComplete={onClose}
        avoidKeyboard
        propagateSwipe
        backdropOpacity={0.3}
    >
        {content}
    </ModalComponent>
);
