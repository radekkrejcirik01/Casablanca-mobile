import React, { useMemo } from 'react';
import { Text, View } from 'react-native';
import { InfoModalProps } from '@components/general/InfoModal/InfoModal.props';
import { Modal } from '@components/general/Modal/Modal';
import { InfoModalStyle } from '@components/general/InfoModal/InfoModal.style';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';

export const InfoModal = ({
    title,
    description,
    onClose,
    ...props
}: InfoModalProps): JSX.Element => {
    const content = useMemo(
        (): JSX.Element => (
            <View style={InfoModalStyle.container}>
                <Text style={InfoModalStyle.title}>{title}</Text>
                <Text style={InfoModalStyle.description}>{description}</Text>
                <TouchableOpacity onPress={onClose}>
                    <Text style={InfoModalStyle.closeButton}>Got it ✅</Text>
                </TouchableOpacity>
            </View>
        ),
        [title, description, onClose]
    );
    return <Modal content={content} onClose={onClose} {...props} />;
};
