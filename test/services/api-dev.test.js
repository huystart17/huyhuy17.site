const assert = require('assert');
const app = require('../../src_node/app');

describe('\'api_dev\' service', () => {
  it('registered the service', () => {
    const service = app.service('api-dev');

    assert.ok(service, 'Registered the service');
  });
});
