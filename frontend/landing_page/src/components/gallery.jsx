import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';


export const Gallery = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the backend
        const response = await axios.get('http://localhost:3001/receipes');

        // Check if response.data is an array
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

  // Inline styles for card and row
  const containerStyle = {
    padding: '15px', // Add padding if needed
    maxWidth: '100%', // Ensure container does not exceed the viewport width
    margin: '0 auto', // Center the container if needed
  };

  const rowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center', // Center the cards horizontally
    gap: '15px', // Space between cards
  };

  const cardStyle = {
    width: '100%', // Full width of the column
    maxWidth: '18rem', // Limit the maximum width of the card
  };

  const colStyle = {
    flex: '1 1 calc(33.333% - 30px)', // Adjust width based on available space and gap
    maxWidth: 'calc(33.333% - 30px)', // Ensure columns do not exceed this width
    marginBottom: '15px', // Space below the column
  };

  return (
    <div id="receipes" style={{ textAlign: 'center' }}>
      <div className="container" style={containerStyle}>
        <div className="section-title">
          <h2>Recipe Gallery</h2>
          <p>Discover our delicious recipes below.</p>
        </div>
        <div className="row" style={rowStyle}>
          {data.length > 0 ? (
            data.map(recipe => (
              <div className="col-md-4" key={recipe.id} style={colStyle}>
                <Card style={cardStyle}>
                  <Card.Img variant="top" src={recipe.picture} />
                  <Card.Body>
                    <Card.Title>{recipe.title}</Card.Title>
                    <Card.Text>
                      {recipe.description}
                    </Card.Text>
                    <Card.Text>
                      <i className="fas fa-clock me-2"></i>
                      <span>{recipe.time_taken} hours</span>
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link href={`/view/${recipe.id}`}>View</Card.Link>
                    <Card.Link href="#edit">Edit</Card.Link>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <p>No recipes available</p>
          )}
        </div>
      </div>
    </div>
  );
};

