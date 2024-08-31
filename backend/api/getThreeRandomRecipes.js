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
