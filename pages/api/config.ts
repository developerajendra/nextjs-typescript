import { AxiosRequestConfig } from 'axios';

export const axiosRequestConfiguration: AxiosRequestConfig = {
    baseURL: 'https://restcountries.eu/',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    },
};
