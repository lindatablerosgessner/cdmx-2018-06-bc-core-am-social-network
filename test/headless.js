// Configura tus test para usarlos

global.window = global;
global.assert = require('chai').assert;
global.fixtures = {
  users: require('../package.json'),
};
require('../src/data');
require('./data.spec.js');
