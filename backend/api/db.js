// db.js
// const { Pool } = require('pg');
// const config = require('./dbConfig'); // Adjust the path to your configuration file

// const pool = new Pool(config);

// module.exports = pool;

require('dotenv').config({ path: '.env.local' });

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

module.exports = pool;