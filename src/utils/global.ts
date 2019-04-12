// 全局调用的方法 =》一般不在组件里调用
import { Message } from 'element-ui';
const commonFn = {
    toastMsg(type: string, msg: string) {
        switch (type) {
            case 'normal':
            Message(msg);
            break;
            case 'success':
                Message({
                    message: msg,
                    type: 'success',
                });
                break;
            case 'warning':
                Message({
                    message: msg,
                    type: 'warning',
                });
                break;
            case 'error':
                Message({
                    message: msg,
                    type: 'error',
                });
                break;
        }
    },
};

export default commonFn;
