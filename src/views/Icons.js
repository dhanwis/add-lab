import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import backgroundImage from './lbmin6.png'; 

function Icons() {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate(); 

  function handleClicks() {
    navigate('/package-list'); 
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="content" style={{ backgroundImage: `url(${backgroundImage})`, height: "100vh", backgroundSize: "cover", backgroundPosition: "center",opacity:'0.9' }}>
      <Container>
        <Row className="justify-content-center align-items-center" style={{ height: "100%" }}>
          <Col md={6}>
            <div className="form-container" style={{ marginTop: "100px" }}>
              <Card className="form-card" style={{ border: "2px solid white", backgroundColor:"white",opacity:"0.9" }}>
                <Card.Body className="labs">
                  <h2 className="text-center mt-4 form-title" style={{color:'black'}}>ADD PACKAGE</h2>
                  <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ height: "310px" }}>
                    <Form.Group as={Row} controlId="packageName" style={{ marginBottom: "20px" }}>
                      <Form.Label column sm="3" style={{color:'black',fontSize:'14px',fontWeight:"bold", whiteSpace: "nowrap", textAlign: "right", paddingRight: "15px"}}>Package Name :</Form.Label>
                      <Col sm="8">
                        <Form.Control style={{width:"100%", borderRadius: '16px',border:"1px solid black"}}
                          className="form-control-styled"
                          required
                          type="text"
                          placeholder="Enter package name"
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="testsIncluded" style={{ marginBottom: "20px" }}>
                      <Form.Label column sm="3" style={{color:'black',fontSize:'14px',fontWeight:"bold", whiteSpace: "nowrap", textAlign: "right", paddingRight: "15px"}}>Tests included :</Form.Label>
                      <Col sm="8">
                        <Form.Control style={{width:"100%", borderRadius: '16px',border:"1px solid black"}}
                          className="form-control-styled"
                          type="text"
                          placeholder="Enter tests included"
                          required
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="price" style={{ marginBottom: "20px" }}>
                      <Form.Label column sm="3" style={{color:'black',fontSize:'14px',fontWeight:"bold", whiteSpace: "nowrap", textAlign: "right", paddingRight: "15px"}}>Package Price :</Form.Label>
                      <Col sm="8">
                        <Form.Control style={{width:"100%", borderRadius: '16px',border:"1px solid black"}}
                          className="form-control-styled"
                          type="text"
                          placeholder="Enter price"
                          required
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="image" style={{ marginBottom: "20px" }}>
                      <Form.Label column sm="3" style={{color:'black',fontSize:'14px',fontWeight:"bold", whiteSpace: "nowrap", textAlign: "right", paddingRight: "15px"}}>Upload Image :</Form.Label>
                      <Col sm="8">
                        <Form.Control style={{width:"100%", borderRadius: '16px',border:"1px solid black"}}
                          className="form-control-styled"
                          type="file"
                          name="image"
                        />
                      </Col>
                    </Form.Group>

                    <Row>
                      <Col className="text-center">
                        <Button className="bn" type="submit" style={{backgroundColor:"green",marginTop:"8px",padding:"10px 55px",marginLeft:"21px",borderRadius:'3px',color:"white"}}>ADD</Button>
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

export default Icons;
