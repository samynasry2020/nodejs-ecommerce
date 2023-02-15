const mysql = require('mysql');

function connectionFactory() {
  return mysql.createConnection({
    host: process.env.DB_HOST || 'postgres://shop:6gcVHF8ZCwDAf61Mme2GGENsRmt62mFN@dpg-cfmjf8ha6gdmb5q8dtvg-a/shop_33fc',
    user: process.env.DB_USER || 'shop',
    password: process.env.DB_PASSWORD || '6gcVHF8ZCwDAf61Mme2GGENsRmt62mFN',
    database: process.env.DB_NAME || 'shop_33fc',
  });
}

module.exports = () => connectionFactory;
