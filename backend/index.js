const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {getRecipes,getRecipeById ,getThreeRandomRecipes} = require('./getData');


const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to handle form submission
app.post('/submit-form', (req, res) => {
  const { name, email } = req.body;
  console.log('Received data:', req.body);
  res.status(200).json({ message: 'Form submitted successfully!' });
});

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
    const recipes = await getRecipes(); // Await the result
    console.log(recipes); // This will now log the resolved data
    res.json(recipes);
     // Send the data as JSON response
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).send('Server Error');
  }
});




// app.get('/receipes', (req, res) => {
//   const data = [
//     { id: 1, name: 'Recipe 1' },
//     { id: 2, name: 'Recipe 2' }
//   ];
  
//   // Log data to verify
//   console.log('Sending data:', data);
  
//   res.setHeader('Content-Type', 'application/json');
//   res.json(data);
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
