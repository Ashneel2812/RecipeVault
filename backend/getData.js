const pool = require('./api/db'); // Adjust the path to your database connection file

// Example query to get all records from the 'recipes' table
async function getRecipes() {
  try {
    // Execute the query
    const result = await pool.query('SELECT * FROM receipes');
    
    // Return the rows from the result
    return result.rows;
  } catch (err) {
    // Log the error
    console.error('Error executing query', err.stack);
    throw err; // Optionally, rethrow the error if you want to handle it further up
  }
}

const getRecipeById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM receipes WHERE id = $1', [id]);
    return result.rows[0]; // Return the single row for the given ID
  } catch (err) {
    console.error('Error fetching data from database:', err.stack);
    throw err; // Propagate the error
  }
};

async function getThreeRandomRecipes()   {
  try {
    // Query to select three random rows from the recipes table
    const result = await pool.query('SELECT * FROM receipes ORDER BY RANDOM() LIMIT 3');
    return result.rows; // Return the array of rows
  } catch (err) {
    console.error('Error fetching random data from database:', err.stack);
    throw err; // Propagate the error
  }
};

module.exports = {
  getRecipes,
  getRecipeById,
  getThreeRandomRecipes
};
