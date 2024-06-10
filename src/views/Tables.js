import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import img from './lbmin6.png'; // Make sure to import the image

function Tables() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the desired route
    navigate('/test');
  };

  const tested = [
    { name: "Sodium Test", lab: "Hyatt Labs", package: "senior citizen package", description: "checks electrolytes and acidity.", price: 3500 },
    { name: "Platelet Count Test", lab: "Riott Innovations", package: "postnatal package", description: "count level of platelet.", price: 2580 },
    { name: "Liver Function Test", lab: "Neethi Diagnostics", package: "fitness package", description: "total bilirubin count.", price: 3800 },
    { name: "Vitamin D Test", lab: "Neethi Diagnostics", package: "postnatal package", description: "vitamin d deficiency.", price: 1499 },
    { name: "Serum Creatinine Test", lab: "Neethi Diagnostics", package: "senior citizen package", description: "kidney diseases.", price: 1450 },
    { name: "Cardiomap Test", lab: "Neethi Diagnostics", package: "senior citizen package", description: "cardiovacular diseases.", price: 6599 },
  ];

  return (
    <div style={styles.pageContainer}>
      <div style={styles.header}>
        <h1 style={styles.heading}>Comprehensive Lab Testing</h1>
        <p style={{lineHeight:"42px",fontWeight:"bold"}}>Explore Our Extensive Laboratory Tests available.</p>
        <Button onClick={handleButtonClick} style={styles.button} variant="success">
         + Add Test
        </Button>
      </div>
      <div className="container" style={styles.cardContainer}>
        {tested.map((member, index) => (
          <Card key={index} style={styles.card}>
            <Card.Body style={styles.cardBody}>
              <div className="team-info">
                <h4 style={styles.name}>{member.name}</h4>
                <h6 style={styles.package}>{member.package}</h6>
                <h6 style={styles.description}>{member.description}</h6>
                <h6 style={styles.price}>₹ {member.price} onwards</h6>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '20px'
  },
  header: {
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px'
  },
  heading: {
    margin: 0,
    fontSize: '2rem'
  },
  button: {
    marginTop: '4px',
    color:"white"
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px'
  },
  card: {
    width: '300px',
  },
  cardBody: {
    paddingTop: '0', 
  },
  package: {
    textTransform: 'lowercase',
    fontWeight: 'normal',
    fontSize: '16px'
  },
  description: {
    textTransform: 'lowercase',
    fontWeight: 'normal',
    fontSize: '16px'
  },
};

export default Tables;
