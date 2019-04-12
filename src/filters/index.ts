
import Vue from 'vue';
export default (function() {
    Vue.filter('status', (value: any) => {
        let msg: string = '';
        switch (value) {
            case '1' :
            msg = '任务中';
            break;
            case '2' :
            msg = '任务结束';
            break;
        }
        return msg;
    });
})();
