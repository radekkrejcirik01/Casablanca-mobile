import moment from 'moment';

export const getAge = (value: string): number => {
    const isValid = moment(value, 'YYYY.MM.DD');
    if (isValid) {
        const today = new Date();
        const birthDate = new Date(value);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age -= 1;
        }
        return age;
    }
    return null;
};
