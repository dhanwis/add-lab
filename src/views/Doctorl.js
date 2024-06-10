import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import img from './lbmin6.png'; 
import i1 from './male.webp';


export default function Doctorl() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the desired route
    navigate('/doctor');
  };

  const docted = [
    { img: i1, name: "Rosalina William", qualfcn: "MBBS,MD Pathology", specialzn: "PATHOLOGY TECHNICIAN", dept: "PATHOLOGY", lab: " Hyatt Labs" },
    { img: i1, name: "Anderson", qualfcn: "MD Cardiology,FESC", specialzn: "CARDIOLOGIST", dept: "CARDIOLOGY", lab: " Riott Innovations" },
    { img: i1, name: "John", qualfcn: "MBBS,DM Endocrinology", specialzn: "ENDOCRINOLOGIST", dept: "ENDOCRINOLOGY", lab: " OptiGen Labs" }
  ];

  return (
    <div style={styles.pageContainer}>
      <div style={styles.header}>
        <h1 style={styles.heading}>Discover Skilled Medical Professionals</h1>
        <p style={{lineHeight:"42px",fontWeight:"bold"}}>Browse through our roster of experienced doctors and specialists.</p>
        <Button onClick={handleButtonClick} style={styles.button} variant="success">
         + Add Doctor
        </Button>
      </div>
      <div className="container" style={{ marginTop: "60px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gridGap: "20px" }}>
        {docted.map((member, index) => (
          <Card key={index}>
            <Card.Body>
              {/* <div className="team-img">
                <img src={member.img} style={{ height: "40%" }} alt={member.name} />
              </div> */}
              <div className="team-info">
                <h4 style={{ color: "green" }}>{member.name}</h4>
                <h6 style={{ fontSize: "12px" }}>{member.qualfcn}</h6>
                <h6>{member.specialzn},{member.lab}</h6>
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
    color:'white'
  },
  
};
