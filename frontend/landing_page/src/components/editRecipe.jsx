import React from 'react';
import { useParams } from 'react-router-dom';

const EditRecipe = () => {
  const { id } = useParams();
  // Fetch recipe details by id or use it to populate a form
  // Here, we just display the id for simplicity

  return (
    <div>
      <h2>Edit Recipe {id}</h2>
      {/* Fetch and display recipe details here */}
      {/* Add a form to edit the recipe */}
    </div>
  );
};

export default EditRecipe;
