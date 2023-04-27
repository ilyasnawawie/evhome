const { parsed: loginEnv } = require('dotenv').config({
  path: '../environment/login.env',
});

module.exports = {
  env: {
    ...loginEnv,
  },
};
