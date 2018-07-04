const m = require('mithril');
const is = require('../app_lib/helper/is.js');

module.exports = {
    input: {
        oninit: function(v) {
            v.attrs = v.attrs || {};
            v.state.validator = is.function(v.attrs.validator) ? v.attrs.validator : () => true;
            v.state.is_valid = true;
            v.state.oninput = function(e) {
                console.log(e.target.value, v.state.validator(e.target.value));
                if (!v.state.validator(e.target.value)) {
                    v.state.is_valid = false;
                } else {
                    v.state.is_valid = true;
                }

                return e;
            };
        },
        view: function(v) {
            return m('input', {
                oninput: v.state.oninput,
                style: {
                    border: v.state.is_valid ? '1px solid green' : '1px solid red',
                },
            });
        },
    },
};
