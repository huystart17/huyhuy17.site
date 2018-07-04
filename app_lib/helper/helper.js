import {APP_DOMAIN, HTTP_CODE} from '../config.js';

import is from './validator.js';
export function convertVietnamese(str) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g, '-');
    str = str.replace(/-+-/g, '-');
    str = str.replace(/^\-+|\-+$/g, '');

    return str;
}

export function appLink(route, options) {
    if (is.string(route)) {
        if (route[0] === '/') {
            route = route.slice(1);
        }
    }
    return APP_DOMAIN + route;
}

export function getSuccessJson(msg, data) {
    return {
        status: HTTP_CODE.SUCCESS,
        msg: msg,
        data: data || {},
    };
}

export function getErrorJson(msg, data) {
    return {
        status: HTTP_CODE.ERROR,
        msg: msg,
        data: data || {},
    };
}
