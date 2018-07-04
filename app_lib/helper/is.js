const is_js = require('is_js');

let is = is_js;
is.date = function(dateValue) {
    if (is.null(dateValue)) {
        return false;
    }
    if (is.string(dateValue) && is.empty(dateValue)) {
        return false;
    }
    return new Date(dateValue).toString() !== 'Invalid Date';
};

is.objectId = function(val) {
    return /^[0-9a-fA-F]{24}$/.test(String(val));
};
is.phone = function(val) {
    if (typeof val === 'string') {
        return /^\d{10,14}$/.test(val);
    } else {
        return false;
    }
};

is.not.phone = function(val) {
    return !is.phone(val);
};

is.not.objectId = function(val) {
    return !is.objectId(val);
};
module.exports = is;
