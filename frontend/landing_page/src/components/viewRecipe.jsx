import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const ViewRecipe = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        // const response = await axios.get(`http://localhost:3001/view/${id}`);
        const response = await axios.get(`/view/${id}`);
        setRecipe(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Inline CSS styles
  const containerStyle = { textAlign: 'center', padding: '15px' };
  const cardStyle = { maxWidth: '30rem', margin: '0 auto' };
  const textLeftStyle = { textAlign: 'left' };
  const subtitleStyle = { marginTop: '1rem', marginBottom: '0.5rem', color: '#6c757d' };
  const listItemStyle = { textAlign: 'left' };

  return (
    <div className="container" style={containerStyle}>
      {recipe ? (
        <Card style={cardStyle}>
          <Card.Img variant="top" src={recipe.picture} alt={recipe.title} />
          <Card.Body>
            <Card.Title style={textLeftStyle}>{recipe.title}</Card.Title>
            <Card.Text style={textLeftStyle}>{recipe.description}</Card.Text>
            <Card.Text style={textLeftStyle}>
              <i className="fas fa-clock me-2"></i>
              <span>{recipe.time_taken} hours</span>
            </Card.Text>
            <Card.Subtitle style={subtitleStyle}>Macros</Card.Subtitle>
            <ListGroup variant="flush">
              <ListGroup.Item style={listItemStyle}>Fats: {recipe.macros.fats}</ListGroup.Item>
              <ListGroup.Item style={listItemStyle}>Carbs: {recipe.macros.carbs}</ListGroup.Item>
              <ListGroup.Item style={listItemStyle}>Protein: {recipe.macros.protien}</ListGroup.Item>
            </ListGroup>
            <Card.Subtitle style={subtitleStyle}>Ingredients</Card.Subtitle>
            <ListGroup variant="flush">
              {Object.values(recipe.ingredients).map((ingredient, index) => (
                <ListGroup.Item style={listItemStyle} key={index}>{ingredient}</ListGroup.Item>
              ))}
            </ListGroup>
            <Card.Subtitle style={subtitleStyle}>Procedure</Card.Subtitle>
            <Card.Text style={textLeftStyle}>
              {recipe.proc.split('\n').map((step, index) => (
                <div key={index}>{step}</div>
              ))}
            </Card.Text>
            <Card.Subtitle style={subtitleStyle}>Advantages</Card.Subtitle>
            <ListGroup variant="flush">
              {Object.values(recipe.adv).map((adv, index) => (
                <ListGroup.Item style={listItemStyle} key={index}>{adv}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      ) : (
        <p>No recipe found</p>
      )}
    </div>
  );
};
