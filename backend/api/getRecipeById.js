const pool = require('./db');

async function getRecipeById(id) {
  try {
    const result = await pool.query('SELECT * FROM receipes WHERE id = $1', [id]);
    return result.rows[0];
  } catch (err) {
    console.error('Error fetching data from database:', err.stack);
    throw err;
  }
}

module.exports = async (req, res) => {
  const id = parseInt(req.query.id, 10);
  try {
    const recipe = await getRecipeById(id);
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ error: 'Recipe not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
