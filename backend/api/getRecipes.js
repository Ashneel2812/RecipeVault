
const pool = require('./db');

async function getRecipes() {
  try {
    const result = await pool.query('SELECT * FROM receipes');
    return result.rows;
  } catch (err) {
    console.error('Error executing query', err.stack);
    throw err;
  }
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS'); // Allow GET and OPTIONS methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers
  try {
    const recipes = await getRecipes();
    res.json(recipes);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
