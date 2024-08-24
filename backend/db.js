// db.js
const { Pool } = require('pg');
const config = require('./dbConfig'); // Adjust the path to your configuration file

const pool = new Pool(config);

module.exports = pool;
