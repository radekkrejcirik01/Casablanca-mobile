import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
    Alert,
    Keyboard,
    ScrollView,
    StyleProp,
    Text,
    TouchableWithoutFeedback,
    ViewStyle
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import { EditScreenStyle } from '@screens/profile/edit/EditScreen/EditScreen.style';
import { PlaceTags } from '@components/general/PlaceTags/PlaceTags';
import { KeyboardAvoidingView } from '@components/general/KeyboardAvoidingView/KeyboardAvoidingView';
import { TextArea } from '@components/general/TextArea/TextArea';
import { setSaveVisible } from '@store/SaveReducer';
import { ReducerProps } from '@store/index.props';
import {
    addPhotoAction,
    removePhotoAction,
    setAboutAction,
    setTagsAction
} from '@store/UserReducer';
import { isArrayEqual } from '@functions/checking-functions';
import { CheckProfileButton } from '@components/edit/CheckProfileButton/CheckProfileButton';
import { Modal } from '@components/general/Modal/Modal';
import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';
import { InfoProfileScreen } from '@screens/general/InfoProfileScreen/InfoProfileScreen';
import { getAge } from '@functions/getAge';
import { PhotoHorizontalList } from '@components/edit/PhotoHorizontalList/PhotoHorizontalList';
import { ImagePickerOptions } from '@screens/registration/PhotosScreen/PhotosScreen.options';

export const EditScreen = (): JSX.Element => {
    const { about, firstname, birthday, photos, tags } = useSelector(
        (state: ReducerProps) => state.user
    );
    const isVisible = useSelector(
        (state: ReducerProps) => state.save.isVisible
    );
    const dispatch = useDispatch();

    const [tagsValue, setTagsValue] = useState<Array<string>>(tags);
    const [aboutValue, setAboutValue] = useState<string>(about);

    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const { bottom } = useSafeAreaInsets();

    const saveTags = useCallback(() => {
        dispatch(setTagsAction(tagsValue));
    }, [dispatch, tagsValue]);

    const saveAbout = useCallback(() => {
        dispatch(setAboutAction(aboutValue));
    }, [dispatch, aboutValue]);

    useEffect(() => {
        dispatch(setSaveVisible(false));
    }, [dispatch]);

    useEffect(() => {
        if (!isVisible) {
            if (!tagsValue?.length) {
                Alert.alert('Please select at least one tag');
                return;
            }
            if (!isArrayEqual(tagsValue, tags)) {
                saveTags();
            }
            if (aboutValue !== about) {
                saveAbout();
            }
        }
    }, [about, aboutValue, isVisible, saveAbout, saveTags, tags, tagsValue]);

    const onPhotoPress = useCallback(() => {
        ImagePicker.openPicker(ImagePickerOptions).then(
            (image: ImageOrVideo) => {
                dispatch(addPhotoAction(image.path));
            }
        );
    }, [dispatch]);

    const onPhotoRemove = useCallback(
        (photo: string) => dispatch(removePhotoAction(photo)),
        [dispatch]
    );

    const check = useCallback(
        (aboutString: string, tagsArray: Array<string>) => {
            if (aboutString !== about || !isArrayEqual(tagsArray, tags)) {
                dispatch(setSaveVisible(true));
            } else {
                dispatch(setSaveVisible(false));
            }
        },
        [about, dispatch, tags]
    );

    const onSelect = useCallback(
        (newTag: string) => {
            let arr: Array<string> = tagsValue;
            if (tagsValue.includes(newTag)) {
                arr = arr.filter((tag: string) => tag !== newTag);
                setTagsValue(arr);
            } else {
                arr = [...tagsValue, newTag];
                setTagsValue(arr);
            }

            check(aboutValue, arr);
        },
        [aboutValue, check, tagsValue]
    );

    const onChange = useCallback(
        (value: string) => {
            setAboutValue(value);

            check(value, tagsValue);
        },
        [check, tagsValue]
    );

    const textAreaViewStyle = useMemo(
        (): StyleProp<ViewStyle> => ({ height: 70 + bottom }),
        [bottom]
    );

    const onPress = () => {
        setModalVisible(true);
    };

    const checkProfileButtonStyle = useMemo(
        (): StyleProp<ViewStyle> => ({ marginTop: 20 + bottom }),
        [bottom]
    );

    const onClose = () => {
        setModalVisible(false);
    };

    const modalContent = useMemo((): JSX.Element => {
        const info: CardDataProps = {
            images: photos,
            name: firstname,
            age: getAge(birthday).toString(),
            tags: tagsValue
        };

        return <InfoProfileScreen onClose={onClose} info={info} />;
    }, [birthday, firstname, photos, tagsValue]);

    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView
                    keyboardVerticalOffset={55}
                    style={EditScreenStyle.keyboardAvoidingView}
                >
                    <PhotoHorizontalList
                        onPress={onPhotoPress}
                        onRemove={onPhotoRemove}
                        photos={photos}
                        photosNumber={4}
                    />
                    <Text style={EditScreenStyle.title}>To go places</Text>
                    <PlaceTags onSelect={onSelect} tags={tags} showAll />
                    <Text style={EditScreenStyle.title}>About</Text>
                    <TextArea
                        value={aboutValue}
                        onChange={onChange}
                        viewStyle={textAreaViewStyle}
                    />
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
            <CheckProfileButton
                onPress={onPress}
                style={checkProfileButtonStyle}
            />
            <Modal
                isVisible={modalVisible}
                backdropOpacity={0.1}
                content={modalContent}
                onClose={onClose}
            />
        </ScrollView>
    );
};
