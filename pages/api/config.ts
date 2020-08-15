import { AxiosRequestConfig } from 'axios';
import API from './apiURLS';

export const axiosRequestConfiguration: AxiosRequestConfig = {
    baseURL: API.BASE_URL,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    },
};



export const axiosRequestConfigurationCountryList: AxiosRequestConfig = {
    baseURL: API.COUNTRY_BASE_URL,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    },
};
