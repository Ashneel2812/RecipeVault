
const pool = require('./db');

async function getThreeRandomRecipes() {
  try {
    const result = await pool.query('SELECT * FROM receipes ORDER BY RANDOM() LIMIT 3');
    return result.rows;
  } catch (err) {
    console.error('Error fetching random data from database:', err.stack);
    throw err;
  }
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS'); // Allow GET and OPTIONS methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers
  try {
    const threeRecipes = await getThreeRandomRecipes();
    console.log(threeRecipes);
    console.log("hi");
    res.json(threeRecipes);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
