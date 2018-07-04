const m = require('mithril');
const r = require('ramda');
const s = require('mithril-stream');
const a = require('animejs');
const b = require('bss');
const f = require('./fields.js');
const config = require('./client_config');

const c = {
    input: require('./component_input.js').input,
};

console.log(c);
const root = document.body;

console.log(f);
const Home = {
    view: () => {
        return [m('h1', config.APP_NAME), m('from', m(c.input, f.email))];
    },
};

m.route(root, '/', {
    '/': Home,
});
