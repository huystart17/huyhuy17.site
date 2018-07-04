// Initializes the `api_dev` service on path `/api-dev`
const createService = require('./api-dev.class.js');
const hooks = require('./api-dev.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api-dev', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('api-dev');

  service.hooks(hooks);
};
