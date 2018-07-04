import is from './is';

let get = {
    array: (data, options) => {
        options = options || {};
        if (is.object(options)) {
            options.debug ? console.log(data || 'Không có dữ liệu') : '';
        }
        if (is.array(data)) {
            return data;
        } else {
            if (options.default) {
                return options.default;
            }
            return [];
        }
    },
    string: (data, options = { default: '' }) => {
        if (is.object(options)) {
            options.debug ? console.log(data || 'Không có dữ liệu') : '';
        }
        if (is.string(data)) {
            return data;
        } else {
            return options.default;
        }
    },
    number: (data, options) => {
        options = options || {};
        if (is.object(options)) {
            options.debug ? console.log(data || 'Không có dữ liệu') : '';
        }
        if (options.from === 'string') {
            data = data.toString().replace(/,/g, '');
        }
        if (is.number(Number(data))) {
            return data;
        } else {
            options.default = options.default || 0;
            return options.default;
        }
    },
    dateString: (data, options) => {
        if (is.object(options)) {
            options.debug ? console.log(data || 'Không có dữ liệu') : '';
        }
        options = options || {};

        if (!isDate(data)) {
            return '';
        } else {
            let date = new Date(data);
            moment.locale('vi');
            if (options.isNotUseMomment) {
                return new Date(data).toLocaleString();
            }
            if (is.string(options.format) && is.not.empty(options.format)) {
                return moment(date).format(options.format);
            } else {
                return moment(date).format('DD-MMMM-YYYY');
                // return date.toLocaleString();
            }
        }
    },

    dateTimeString: (data, options) => {
        if (is.object(options)) {
            options.debug ? console.log(data || 'Không có dữ liệu') : '';
        }
        options = options || {};

        if (!isDate(data)) {
            return '';
        } else {
            let date = new Date(data);
            moment.locale('vi');
            if (is.string(options.format) && is.not.empty(options.format)) {
                return moment(date).format(options.format);
            } else {
                return moment(date).format('HH:MM');
                // return date.toLocaleString();
            }
        }
    },
    date: (data, options) => {
        if (is.object(options)) {
            options.debug ? console.log(data || 'Không có dữ liệu') : '';
        }
        let date = new Date(data);
        if (date.toString() === 'Invalid Date') {
            return '';
        } else {
            return date;
        }
    },
    object: (data, options) => {
        if ('object' !== typeof data) {
            return {};
        }
        options = options || {};
        options.default = options.default || {};
        return data || {};
    },
    titleCase(str) {
        return str.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    },
    theFunction(func) {
        if (is.function(func)) {
            return func;
        } else {
            func = () => true;
            return func;
        }
    },
};
export default get;
