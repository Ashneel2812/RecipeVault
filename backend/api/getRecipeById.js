
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
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS'); // Allow GET and OPTIONS methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers
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
