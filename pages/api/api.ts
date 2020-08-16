import initializeAxios from './axiosSetup';
import { axiosRequestConfiguration } from './config';
import Axios from "axios";

const axiosInstance = initializeAxios(axiosRequestConfiguration);

const get = (url: string, queryParams?: object) => {
    return axiosInstance.get(url, { params: queryParams }).then((res:any) => res.data );
};


 
 
const post = <T>(url: string, body: object, queryParams?: object) => {

    return  axiosInstance.post<T>(url, body, { params: queryParams }).then((res:any) => res.data );
};

const fileUpload = <T>(url: string, body: object, queryParams?: object) => {

    return  Axios.post<T>(axiosRequestConfiguration.baseURL+url, body, {headers: {'Content-Type': 'multipart/form-data'}}).then((res:any) => res.data );
};


const put = <T>(url: string, body: object, queryParams?: object) => {
    return  axiosInstance.put<T>(url, body, { params: queryParams }).then((res:any) => res.data );
};

/*
const get = <T>(url: string, queryParams?: object): Observable<T> => {
    return defer(()=> axiosInstance.get<T>(url, { params: queryParams }))
        .pipe(map(result => result.data));
};
*/

/*const post = <T>(url: string, body: object, queryParams?: object): Observable<T | void> => {
    return defer(()=> axiosInstance.post<T>(url, body, { params: queryParams }))
        .pipe(map(result => result.data));
};

const put = <T>(url: string, body: object, queryParams?: object): Observable<T | void> => {
    return defer(()=>axiosInstance.put<T>(url, body, { params: queryParams }))
        .pipe(map(result => result.data));
};

const patch = <T>(url: string, body: object, queryParams?: object): Observable<T | void> => {
    return defer(()=> axiosInstance.patch<T>(url, body, { params: queryParams }))
        .pipe(map(result => result.data));
};

const deleteR = <T>(url: string, id:number): Observable<T | void> => {
    return defer(() => (axiosInstance.delete(`${url}/${id}` )))
        .pipe(map(result => result.data)
        );
};*/
/*, post, put, patch, delete: deleteR*/

export default {get, post, put, fileUpload };
