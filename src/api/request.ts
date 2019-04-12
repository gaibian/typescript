
import axios from 'axios';
const CancelToken = axios.CancelToken;

// 创建axios实例
const service = axios.create({
    baseURL: 'http://www.baidu.com', // 请求域名地址
    timeout: 6000, // 超时时间
});

// request 拦截器
service.interceptors.request.use(
    (config: any) => {
        return config;
    }, (error: any) => {
        Promise.reject(error);
    },
);

// response 拦截器
service.interceptors.response.use(
    (response: any) => {
        const res = response.data;
        if (res.code !== 200) { // 返回失败
            return Promise.reject('error');
        } else {  // 返回成功
            return res;
        }
    },
    (error: any) => {
        return Promise.reject('error');
    },
);

export default {
    // get 请求
    get(url: string, param: any) {
        return new Promise((resolve: any, reject: any) => {
            service.get(url, param).then((res: any) => {
                resolve(res);
            }, (response: any) => {
                resolve(response);
            });
        });
    },
};

