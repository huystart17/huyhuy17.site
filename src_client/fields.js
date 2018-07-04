const is = require('../app_lib/helper/is.js');
const fields = {
    password: {
        name: 'Mật khẩu',
        placeholder: 'Nhập mật khẩu...',
        value: 'password',
        validator: val => {
            return true;
        },
        msg: '',
        description: 'Ghi chú',
    },
    email: {
        name: 'Email',
        value: 'email',
        validator: is.email,
        msg: 'Email phải có kiểu là abc@abc ',
        description: 'Email sẽ dùng đẻ đăng nhập ',
    },
};

module.exports = fields;
