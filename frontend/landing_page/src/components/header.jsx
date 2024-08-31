import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

export const Header = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the backend
        // const response = await axios.get('http://localhost:3001/');
        const response = await axios.get('https://recipe-vault-backend-omega.vercel.app/api/getThreeRandomRecipes.js');
        
        // Ensure response.data is an array
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          throw new Error('Unexpected response format');
        }
      } catch (error) {
        // Handle error
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Ensure data has at least 3 items
  if (data.length < 3) {
    return <p>Not enough data to display the carousel.</p>;
  }

  // Extract the first three recipes from the data
  const [firstRecipe, secondRecipe, thirdRecipe] = data;

  // Inline styles for the carousel images
  const imageStyle = {
    height: '600px', // Set a fixed height for the images
    objectFit: 'cover', // Ensure the image covers the container without distortion
    width: '100%', // Make sure the image takes up the full width of the carousel item
  };

  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          style={imageStyle} // Apply inline styles
          src={firstRecipe.picture} // Use the 'picture' property from the JSON data
          alt={firstRecipe.title} // Use the recipe title for alt text
        />
        <Carousel.Caption>
          <h3>{firstRecipe.title}</h3> {/* Display the recipe title */}
          <p>{firstRecipe.description}</p> {/* Display the recipe description */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={imageStyle} // Apply inline styles
          src={secondRecipe.picture} // Use the 'picture' property from the JSON data
          alt={secondRecipe.title} // Use the recipe title for alt text
        />
        <Carousel.Caption>
          <h3>{secondRecipe.title}</h3> {/* Display the recipe title */}
          <p>{secondRecipe.description}</p> {/* Display the recipe description */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={imageStyle} // Apply inline styles
          src={thirdRecipe.picture} // Use the 'picture' property from the JSON data
          alt={thirdRecipe.title} // Use the recipe title for alt text
        />
        <Carousel.Caption>
          <h3>{thirdRecipe.title}</h3> {/* Display the recipe title */}
          <p>{thirdRecipe.description}</p> {/* Display the recipe description */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

