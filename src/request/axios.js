import axios from 'axios';
import { ElMessage } from 'element-plus';
import { Snackbar } from '@varlet/ui'
import {useGetUserStore} from "@/store/modules/user/user.js";
import router from "@/router/index.js";

// import useUserStore from '@/stores/modules/user';
// import storage from '@/utils/storage';
class Request {
    constructor() {
        this.instance = axios.create({
            baseURL: import.meta.env.VITE_APP_BASE_URL.substr(-1) === '/' ? import.meta.env.VITE_APP_BASE_URL : `${import.meta.env.VITE_APP_BASE_URL}/`,
            timeout: 30000,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;',
                // 'lang': storage.get('lang') ?? 'zh-cn',
            },
        });

        this.instance.interceptors.request.use((config) => {
                const UserStore = useGetUserStore()
                if (UserStore.token) {
                    config.headers[import.meta.env.VITE_REQUEST_HEADER_TOKEN_KEY] = UserStore.token;
                    config.headers[import.meta.env.VITE_REQUEST_HEADER_SITEID_KEY] = UserStore.site_id || 0;
                }
                if(!config.showLoading ) return config;
                Snackbar['loading']({
                    type:'loading',
                    content:'正在请求处理中 . . .',
                    lockScroll: true,
                    forbidClick:true,
                })
                return config;
            },
            (err) => {
                return Promise.reject(err);
            }
        );

        this.instance.interceptors.response.use(
            (response) => {
                Snackbar.clear()
                if (response.request.responseType !== 'blob') {
                    const res = response.data;
                    if (res.code !== 1) {
                        this.handleAuthError(res.code);
                        if (res.code !== 401)  Snackbar['error'](res.msg);
                        return Promise.reject(new Error(res.msg || 'Error'));
                    } else {
                        if (response.config.showSuccessMessage)  Snackbar['success'](res.msg);
                        return res;
                    }
                }
                return response.data;
            },
            (err) => {
                Snackbar.clear()
                this.handleNetworkError(err);
                return Promise.reject(err);
            }
        );
    }

    get(url, config ) {
        return this.instance.get(url, config);
    }

    post(url, data, config) {
        return this.instance.post(url, data, config);
    }

    put(url, data, config) {
        return this.instance.put(url, data, config);
    }

    delete(url, config) {
        return this.instance.delete(url, config);
    }

    handleNetworkError(err) {
        let errMessage = '';

        if (err.response && err.response.status) {
            const errStatus = err.response.status;
            switch (errStatus) {
                case 400:
                    errMessage = t('axios.400');
                    break;
                case 401:
                    errMessage = t('axios.401');
                    break;
                case 403:
                    errMessage = t('axios.403');
                    break;
                case 404:
                    const baseURL = isUrl(err.response.config.baseURL) ? err.response.config.baseURL : location.origin;
                    errMessage = baseURL + t('axios.404');
                    break;
                case 405:
                    errMessage = t('axios.405');
                    break;
                case 408:
                    errMessage = t('axios.408');
                    break;
                case 409:
                    errMessage = t('axios.409');
                    break;
                case 500:
                    errMessage = t('axios.500');
                    break;
                case 501:
                    errMessage = t('axios.501');
                    break;
                case 502:
                    errMessage = t('axios.502');
                    break;
                case 503:
                    errMessage = t('axios.503');
                    break;
                case 504:
                    errMessage = t('axios.504');
                    break;
                case 505:
                    errMessage = t('axios.505');
                    break;
            }
        }
        err.message.includes('timeout') && (errMessage = t('axios.timeout'));
        err.code == 'ERR_NETWORK' && (errMessage = err.config.baseURL + t('axios.errNetwork'));
        errMessage && ElMessage({ message: errMessage, type: 'error' });
    }

    handleAuthError(code) {
        const UserStore = useGetUserStore()
        switch (code) {
            case 302:
                UserStore.logout()
                router.push('/login')
                break;
            case 400:
                UserStore.logout()
                router.push('/login')
                break;
        }
    }
}

export default new Request();
