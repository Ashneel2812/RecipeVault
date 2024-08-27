const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {getRecipes,getRecipeById ,getThreeRandomRecipes} = require('./getData');


const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());



app.get('/',async (req,res)=>{
  console.log("hello");
  try {
    const three_recipes =await getThreeRandomRecipes(); // Await the result
    console.log(three_recipes); // This will now log the resolved data
    res.json(three_recipes); // Send the data as JSON response
    console.log(typeof(recipes));
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).send('Server Error');
  }
});

app.get('/receipes', async (req, res) => {
  try {
    const recipes = await getRecipes();// Await the result
    console.log(recipes); // This will now log the resolved data
    res.json(recipes);
     // Send the data as JSON response
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).send('Server Error');
  }
});

app.get('/view/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
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
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
