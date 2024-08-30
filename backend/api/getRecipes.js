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
  try {
    const recipes = await getRecipes();
    res.json(recipes);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
