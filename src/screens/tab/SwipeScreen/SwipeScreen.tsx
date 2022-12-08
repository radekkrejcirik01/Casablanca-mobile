import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Swiper } from '@components/swipe/Swiper/Swiper';
import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';
import { SwipeHeader } from '@components/swipe/SwipeHeader/SwipeHeader';
import { Screen } from '@components/general/Screen/Screen';
import { ScreenEdgesEnum } from '@components/general/Screen/Screen.enum';
import { postRequest } from '@utils/Axios/Axios.service';
import {
    SwipeGetInterface,
    SwipeResponseInterface
} from '@models/Registration/Registration.interface';
import { ReducerProps } from '@store/index.props';

export const SwipeScreen = (): JSX.Element => {
    const {
        agePreference,
        distancePreference,
        email,
        filterByTags,
        showMe,
        tags
    } = useSelector((state: ReducerProps) => state.user);

    const [data, setData] = useState<Array<CardDataProps>>([]);

    const loadSwiperData = useCallback(() => {
        if (email) {
            postRequest<SwipeResponseInterface, SwipeGetInterface>(
                'https://cb5fb5ckol.execute-api.eu-central-1.amazonaws.com/swipe/get',
                {
                    email,
                    distancePreference,
                    agePreference,
                    showMe,
                    filterByTags,
                    tags
                }
            ).subscribe((response: SwipeResponseInterface) => {
                if (response?.status) {
                    setData(response.data);
                }
            });
        }
    }, [agePreference, distancePreference, email, filterByTags, showMe, tags]);

    useEffect(() => loadSwiperData(), [email, loadSwiperData]);

    const swiper = useMemo((): JSX.Element => {
        if (data && data?.length > 0) {
            return <Swiper data={data} />;
        }
        return null;
    }, [data]);

    return (
        <Screen edges={[ScreenEdgesEnum.TOP]}>
            <SwipeHeader />
            {swiper}
        </Screen>
    );
};
