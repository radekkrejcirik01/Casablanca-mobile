import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { PointViewProps } from '@components/general/PointView/PointView.props';
import { PointViewStyle } from '@components/general/PointView/PointView.style';

export const PointView = ({
    onPressMinus,
    onPressPlus
}: PointViewProps): JSX.Element => (
    <View style={PointViewStyle.pointView}>
        <TouchableOpacity onPress={onPressMinus}>
            <Text style={PointViewStyle.pointText}>👈</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressPlus}>
            <Text style={PointViewStyle.pointText}>👉</Text>
        </TouchableOpacity>
    </View>
);
