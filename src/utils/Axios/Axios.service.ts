import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { defer, map, Observable } from 'rxjs';
import { axiosInstance } from '@utils/Axios/Axios.instance';

export const getRequest = <T>(
    endpoint: string,
    id: number,
    config?: AxiosRequestConfig
): Observable<T> =>
    defer(() =>
        axiosInstance.get(
            `https://w2gdfxt8dc.execute-api.eu-central-1.amazonaws.com/${endpoint}${id}`,
            config
        )
    ).pipe(map((result: AxiosResponse<T>) => result.data));

export const postRequest = <T, B>(
    endpoint: string,
    data: B,
    config?: AxiosRequestConfig
): Observable<T> =>
    defer(() =>
        axiosInstance.post(
            `https://w2gdfxt8dc.execute-api.eu-central-1.amazonaws.com/${endpoint}`,
            data,
            config
        )
    ).pipe(map((result: AxiosResponse<T>) => result.data));

export const updateRequest = <T>(
    endpoint: string,
    data: T,
    config?: AxiosRequestConfig
): Observable<T> =>
    defer(() =>
        axiosInstance.put(
            `https://w2gdfxt8dc.execute-api.eu-central-1.amazonaws.com/${endpoint}`,
            data,
            config
        )
    ).pipe(map((result: AxiosResponse<T>) => result.data));

export const deleteRequest = <T>(
    endpoint: string,
    id: number,
    config?: AxiosRequestConfig
): Observable<T> =>
    defer(() =>
        axiosInstance.delete(
            `https://w2gdfxt8dc.execute-api.eu-central-1.amazonaws.com/${endpoint}/${id}`,
            config
        )
    ).pipe(map((result: AxiosResponse<T>) => result.data));
