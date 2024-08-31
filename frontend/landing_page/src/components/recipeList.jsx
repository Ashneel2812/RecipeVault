// src/RecipeList.js
import React, { useState, useEffect } from 'react';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        // const response = await fetch('http://localhost:3001/receipes');
        const response = await fetch('https://recipe-vault-backend-omega.vercel.app/api/getRecipes');
    
        // Check if the response is OK
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        // Check if the response body is empty
        const text = await response.text();
        if (text.trim() === '') {
          throw new Error('Empty response');
        }
    
        // Parse response as JSON
        const data = JSON.parse(text);
        setRecipes(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    

    fetchRecipes();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Recipe List</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <h2>{recipe.title}</h2>
            <img src={recipe.picture} alt={recipe.title} style={{ width: '200px', height: 'auto' }} />
            <p>{recipe.description}</p>
            <p><strong>Time Taken:</strong> {recipe.time_taken} hours</p>
            <p><strong>Macros:</strong> Fats: {recipe.macros.fats}, Carbs: {recipe.macros.carbs}, Protein: {recipe.macros.protein}</p>
            <p><strong>Ingredients:</strong></p>
            <ul>
              {Object.values(recipe.ingredients).map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <p><strong>Procedure:</strong></p>
            <p>{recipe.proc}</p>
            <p><strong>Advantages:</strong></p>
            <ul>
              {Object.values(recipe.adv).map((advantage, index) => (
                <li key={index}>{advantage}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
