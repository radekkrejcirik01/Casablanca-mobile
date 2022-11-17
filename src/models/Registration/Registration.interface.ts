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
    distance: number;
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

export interface DistanceInterface {
    email: string;
    distance: number;
}

export interface FilterByTagsInterface {
    email: string;
    filterByTags: number;
}

export interface ShowMeInterface {
    email: string;
    showMe: number;
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
        photos: Array<string>;
        tags: Array<string>;
        gender: string;
        showme: string;
    };
}
