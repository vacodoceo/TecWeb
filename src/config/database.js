// Import environment variables from .env
require('dotenv').config();

const config = {
  default: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT || 'postgres',
    database: process.env.DB_NAME,
    host: process.env.DB_HOST || '127.0.0.1',
  },
  development: {
    extend: 'default',
    database: process.env.DB_NAME || 'gift_exchange',
  },
  test: {
    extend: 'default',
    database: 'gift_exchange_test',
  },
  production: {
    extend: 'default',
    use_env_variable: 'DATABASE_URL',
  },
};

Object.keys(config).forEach((configKey) => {
  const configValue = config[configKey];
  if (configValue.extend) {
    config[configKey] = Object.assign({}, config[configValue.extend], configValue);
  }
});

module.exports = config;
