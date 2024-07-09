/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { useState } from "react";
// import { useNavigate } from 'react-router-dom';
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import backgroundImage from './lbmin6.png'; 

function Map() {
  const [validated, setValidated] = useState(false);
  // const navigate = useNavigate(); 

  // const handleClicks = () => {
  //   navigate('/abc'); 
  // };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="content" style={{ backgroundImage: `url(${backgroundImage})`, height: "100vh", backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(100%)", opacity: '0.9' }}>
      <Container>
        <Row className="justify-content-center align-items-center" style={{ height: "100%" }}>
          <Col md={6}>
            <div className="form-container" style={{ marginTop: "100px" }}>
              <Card className="form-card" style={{  backgroundColor: "white", opacity: "0.9" }}>
                <Card.Body className="labs">
                  <h2 className="text-center mt-4 form-title" style={{ color: 'black', fontWeight: "bold" }}>ADD TEST</h2>
                  <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ height: "310px" }}>
                    <Form.Group as={Row} controlId="testName" style={{ marginBottom: "20px" }}>
                      <Form.Label column sm="3" className="text-right form-label" style={{color:"black",fontSize:'15px',fontWeight:"bold"}}>Test Name :</Form.Label>
                      <Col sm="8">
                        <Form.Control className="form-control-styled" style={{ borderRadius: '16px',border:"1px solid black" }}
                          required
                          type="text"
                          placeholder="Enter test name"
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="packageName" style={{ marginBottom: "20px" }}>
                      <Form.Label column sm="3" className="text-right form-label" style={{color:"black",fontSize:'15px',fontWeight:"bold"}}>Package :</Form.Label>
                      <Col sm="8">
                        <Form.Control className="form-control-styled" style={{ borderRadius: '16px',border:"1px solid black" }}
                          required
                          type="text"
                          placeholder="Enter package name"
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="description" style={{ marginBottom: "20px" }}>
                      <Form.Label column sm="3" className="text-right form-label" style={{color:"black",fontSize:'15px',fontWeight:"bold"}}>Description :</Form.Label>
                      <Col sm="8">
                        <Form.Control className="form-control-styled" style={{ borderRadius: '16px',border:"1px solid black" }}
                          required
                          type="text"
                          placeholder="Enter description"
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="price" style={{ marginBottom: "20px" }}>
                      <Form.Label column sm="3" className="text-right form-label" style={{color:"black",fontSize:'15px',fontWeight:"bold"}}>Test Price :</Form.Label>
                      <Col sm="8">
                        <Form.Control className="form-control-styled" style={{ borderRadius: '16px',border:"1px solid black" }}
                          required
                          type="text"
                          placeholder="Enter price"
                        />
                      </Col>
                    </Form.Group>

                    <Row>
                      <Col className="text-center">
                        {/* <Button type="button" onClick={handleClicks} style={{ backgroundColor: "#007bff", marginTop: "8px", padding: "10px 55px", borderRadius: '3px',color:"white" }}>BACK</Button> */}
                        <Button type="submit" style={{ backgroundColor: "green", marginTop: "8px", padding: "10px 55px", marginLeft: "12px", borderRadius: '3px',color:"white" }}>ADD TEST</Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Map;
