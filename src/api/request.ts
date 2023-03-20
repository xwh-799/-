import axios, {type AxiosResponse, type InternalAxiosRequestConfig} from "axios";
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import type {ResultType} from '@/interface/ResultType'
import {detail} from '@/stores'
import {getUUID} from "@/utils/uuid_token";

// const $detail = detail()
const requests = axios.create({
    baseURL: '/api',
    timeout: 5000,
    headers: {
        userTempId: getUUID()
    }
})

requests.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
    nprogress.start()
    return config
})

requests.interceptors.response.use((res: AxiosResponse<ResultType, any>) => {
    nprogress.done()
    return res
}, error => {
    return Promise.reject(new Error('faile'))
})

export default requests
