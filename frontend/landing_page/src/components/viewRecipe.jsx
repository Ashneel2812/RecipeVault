import React from 'react';
import { useParams } from 'react-router-dom';

const ViewRecipe = () => {
  const { id } = useParams();
  // Fetch recipe details by id or use it to display static content
  // Here, we just display the id for simplicity

  return (
    <div>
      <h2>View Recipe {id}</h2>
      {/* Fetch and display recipe details here */}
    </div>
  );
};

export default ViewRecipe;
