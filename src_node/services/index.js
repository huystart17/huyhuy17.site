const apiDev = require('./api-dev/api-dev.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(apiDev);
};
