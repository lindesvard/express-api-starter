module.exports = {
  db: {
    username: '',
    password: '',
    database: '',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
  },
  logLevel: 'tiny',
  jwt: {
    secret: '',
    expire: 60 * 60,
  },
};
