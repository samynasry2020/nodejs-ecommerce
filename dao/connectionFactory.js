const mysql = require('mysql');

function connectionFactory() {
  return mysql.createConnection({
    host: process.env.DB_HOST || 'dpg-cfmjf8ha6gdmb5q8dtvg-a',
    user: process.env.DB_USER || 'shop',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'shop_33fc',
  });
}

module.exports = () => connectionFactory;
