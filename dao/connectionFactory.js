const mysql = require('mysql');

function connectionFactory() {
  return mysql.createConnection({
    host: process.env.DB_HOST || 'sql9.freemysqlhosting.net',
    user: process.env.DB_USER || 'sql9598530',
    password: process.env.DB_PASSWORD || 'uR2Inasyh1',
    database: process.env.DB_NAME || 'sql9598530',
  });
}

module.exports = () => connectionFactory;
