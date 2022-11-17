import React, { useCallback, useMemo, useState } from 'react';
import {
    Alert,
    Keyboard,
    StyleProp,
    Text,
    TouchableWithoutFeedback,
    View,
    ViewStyle
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PlaceTags } from '@components/general/PlaceTags/PlaceTags';
import { KeyboardAvoidingView } from '@components/general/KeyboardAvoidingView/KeyboardAvoidingView';
import { TextArea } from '@components/general/TextArea/TextArea';
import { setSaveVisible } from '@store/SaveReducer';
import { ReducerProps } from '@store/index.props';
import { setAboutAction, setTagsAction } from '@store/UserReducer';
import { isArrayEqual } from '@functions/checking-functions';
import { CheckProfileButton } from '@components/profile/CheckProfileButton/CheckProfileButton';
import { Modal } from '@components/general/Modal/Modal';
import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';
import { InfoProfileScreen } from '@screens/general/InfoProfileScreen/InfoProfileScreen';
import { getAge } from '@functions/getAge';
import { PhotoHorizontalList } from '@components/profile/PhotoHorizontalList/PhotoHorizontalList';
import { ProfileEditStyle } from '@components/profile/ProfileEdit/ProfileEdit.style';
import { Title } from '@components/general/Title/Title';
import { SaveButton } from '@components/general/SaveButton/SaveButton';
import { PhotoEdit } from '@components/profile/PhotoEdit/PhotoEdit';
import {
    ProfileEditDefaultProps,
    ProfileEditProps
} from '@components/profile/ProfileEdit/ProfileEdit.props';
import { updateRequest } from '@utils/Axios/Axios.service';
import {
    AboutInterface,
    ResponseInterface,
    TagsInterface
} from '@models/Registration/Registration.interface';

export const ProfileEdit = ({ style }: ProfileEditProps): JSX.Element => {
    const { about, email, firstname, birthday, photos, tags } = useSelector(
        (state: ReducerProps) => state.user
    );
    const dispatch = useDispatch();

    const { bottom } = useSafeAreaInsets();

    const [tagsValue, setTagsValue] = useState<Array<string>>(tags);
    const [aboutValue, setAboutValue] = useState<string>(about);

    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<JSX.Element>();

    const checkSaveVisible = useCallback(
        (aboutString: string, tagsArray: Array<string>) => {
            if (aboutString !== about || !isArrayEqual(tagsArray, tags)) {
                dispatch(setSaveVisible(true));
            } else {
                dispatch(setSaveVisible(false));
            }
        },
        [about, dispatch, tags]
    );

    const onCloseModal = () => setModalVisible(false);

    const saveTags = useCallback(() => {
        updateRequest<ResponseInterface, TagsInterface>('user/tags/update', {
            user: email,
            tags: tagsValue
        }).subscribe();

        dispatch(setTagsAction(tagsValue));
    }, [dispatch, email, tagsValue]);

    const saveAbout = useCallback(() => {
        updateRequest<ResponseInterface, AboutInterface>('user/about/update', {
            email,
            about: aboutValue
        }).subscribe();

        dispatch(setAboutAction(aboutValue));
    }, [dispatch, email, aboutValue]);

    const onPressSaveButton = useCallback(() => {
        if (tagsValue?.length) {
            if (!isArrayEqual(tagsValue, tags)) {
                saveTags();
            }
            if (aboutValue !== about) {
                saveAbout();
            }
        } else {
            Alert.alert('Please select at least one tag');
        }
    }, [about, aboutValue, saveAbout, saveTags, tags, tagsValue]);

    const openPhotoEdit = useCallback(() => {
        setModalVisible(true);
        setModalContent(<PhotoEdit photos={photos} onClose={onCloseModal} />);
    }, [photos]);

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

            checkSaveVisible(aboutValue, arr);
        },
        [aboutValue, checkSaveVisible, tagsValue]
    );

    const onChangeTextArea = useCallback(
        (value: string) => {
            setAboutValue(value);

            checkSaveVisible(value, tagsValue);
        },
        [checkSaveVisible, tagsValue]
    );

    const textAreaViewStyle = useMemo(
        (): StyleProp<ViewStyle> => ({ height: 70 + bottom }),
        [bottom]
    );

    const InfoModalContent = useCallback((): JSX.Element => {
        const info: CardDataProps = {
            images: photos,
            name: firstname,
            age: getAge(birthday)?.toString(),
            tags: tagsValue
        };

        return <InfoProfileScreen onClose={onCloseModal} info={info} />;
    }, [birthday, firstname, photos, tagsValue]);

    const onCheckProfile = () => {
        setModalVisible(true);
        setModalContent(<InfoModalContent />);
    };

    const checkProfileButtonStyle = useMemo(
        (): StyleProp<ViewStyle> => ({ marginTop: 20 + bottom }),
        [bottom]
    );

    return (
        <View style={style}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView keyboardVerticalOffset={55}>
                    <View style={ProfileEditStyle.header}>
                        <Title title="Edit profile" />
                        <SaveButton onPress={onPressSaveButton} />
                    </View>
                    <PhotoHorizontalList
                        onPress={openPhotoEdit}
                        photos={photos}
                        photosNumber={4}
                        style={ProfileEditStyle.photoHorizontalList}
                    />
                    <Text style={ProfileEditStyle.text}>To go places</Text>
                    <PlaceTags onSelect={onSelect} tags={tags} showAll />
                    <Text style={ProfileEditStyle.text}>About</Text>
                    <TextArea
                        value={aboutValue}
                        onChange={onChangeTextArea}
                        viewStyle={textAreaViewStyle}
                    />
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
            <CheckProfileButton
                onPress={onCheckProfile}
                style={checkProfileButtonStyle}
            />
            <Modal
                isVisible={modalVisible}
                backdropOpacity={0.1}
                content={modalContent}
                onClose={onCloseModal}
            />
        </View>
    );
};

ProfileEdit.defualtProps = ProfileEditDefaultProps;
