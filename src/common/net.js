import axios from 'axios';
axios.defaults.timeout = 5000;
axios.defaults.withCredentials = true;
import { Message as $message } from 'element-ui';
async function postData(url, data = null) {
    console.log(url);
    // commit('fetch_loading', { name });
    try {
        const formdata = new FormData();
        for (let key in data) {
            formdata.append(key, data[key]);
        }
        const { data: resBody } = await axios.post(url, formdata);
        const { code, data: resData, message } = resBody;
        let errMsg;
        console.log(resBody)
        if (code === 0) {
            return resData;
        } else {
            errMsg = message;
            throw errMsg;
        }
    } catch (errMsg) {
        errMsg = errMsg || '网络异常';
        $message(errMsg);
        throw errMsg;
    }
}
async function getData(url, data = null) {
    let queryStrings = data ? ['?'] : '';
    if (queryStrings) {
        Object.keys(data).forEach(key => {
            queryStrings.push(`${key}=${data[key]}`);
            queryStrings.push('&')
        });
        queryStrings = queryStrings.slice(0, -1).join('');
    }
    try {
        const { data: resBody } = await axios.get(url + queryStrings);
        const { code, data: resData, message } = resBody;
        let errMsg;
        console.log(resBody)
        if (code === 0) {
            return resData;
        } else {
            errMsg = message;
            throw errMsg;
        }
    } catch (errMsg) {
        errMsg = errMsg || '网络异常';
        $message(errMsg);
        throw errMsg;
    }
}
export { postData, getData }