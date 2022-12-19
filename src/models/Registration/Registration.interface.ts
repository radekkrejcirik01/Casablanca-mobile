import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';

export interface ResponseInterface {
    status: string;
    message: string;
}

export interface RegistrationInterface {
    firstname: string;
    birthday: string;
    about: string;
    tags: Array<string>;
    photos: Array<string>;
    gender: number;
    showMe: number;
    email: string;
    distancePreference: number;
    filterByTags: number;
    notifications: number;
    password: string;
}

export interface LoginInterface {
    email: string;
    password: string;
}

export interface PhotosInterface {
    user: string;
    photos: Array<string>;
}

export interface TagsInterface {
    user: string;
    tags: Array<string>;
}

export interface AboutInterface {
    email: string;
    about: string;
}

export interface NotificationsInterface {
    email: string;
    notifications: number;
}

export interface DistancePreferenceInterface {
    email: string;
    distancePreference: number;
}

export interface AgePreferenceInterface {
    email: string;
    agePreference: string;
}

export interface FilterByTagsInterface {
    email: string;
    filterByTags: number;
}

export interface ShowMeInterface {
    email: string;
    showMe: number;
}

export interface LastActiveInterface {
    email: string;
    lastActive: string;
}

export interface UserGetInterface {
    email: string;
}

export interface UserResponseInterface {
    status: string;
    message: string;
    data?: {
        email: string;
        firstname: string;
        birthday: string;
        about: string;
        photos: Array<string>;
        tags: Array<string>;
        gender: number;
        showMe: number;
        distancePreference: number;
        agePreference: string;
        filterByTags: number;
        notifications: number;
    };
}

export interface SwipeGetInterface {
    email: string;
    distancePreference: number;
    agePreference: string;
    showMe: number;
    filterByTags: number;
    tags: Array<string>;
}

export interface SwipeResponseInterface {
    status: string;
    message: string;
    data?: Array<CardDataProps>;
}

export interface SwipeLikeInterface {
    email: string;
    user: string;
    value: number;
}

export interface RegisterDeviceInterface {
    email: string;
    deviceToken: string;
}

export interface NotifyDeviceInterface {
    token: string;
}
