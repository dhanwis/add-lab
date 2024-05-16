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
import i3 from '../assets/img/blood.gif'
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";


function Icons() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <div className="content" style={{marginTop:"100px",backgroundColor:'white'}}>
        <Container className="text-left">
          <Row>
            <Col>
              <img src={i3}/>
            </Col>
            <Col md={{ span: 7, offset: 0 }}>
              <Card style={{backgroundColor:'white',boxShadow:'none'}}>
                <Card.Body className="labs">
                  <h2 className="text-center mt-4" style={{ fontFamily: "Helvetica",fontWeight:'bold' }}>ADD PACKAGE</h2>
                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Group style={{marginTop:'10px'}} as={Col} controlId="validationCustom01">
                        <Form.Label style={{ color: "black", fontSize: "15px",fontWeight:'bold',marginLeft:"5px"}}>PACKAGE NAME</Form.Label>
                      </Form.Group>
                      <Col md="8">
                        <Form.Control
                          style={{ height: "38px",borderColor: "black" }}
                          required
                          type="text"
                          placeholder="Enter name"
                        />
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group style={{marginTop:'10px'}} as={Col} controlId="validationCustom01">
                        <Form.Label style={{ color: "black", fontSize: "15px",fontWeight:'bold',marginLeft:"5px" }}>LAB NAME</Form.Label>
                      </Form.Group>
                      <Col md="8">
                        <Form.Control
                          style={{ height: "38px",borderColor: "black" }}
                          required
                          type="text"
                          placeholder="Enter name"
                        />
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group style={{ marginTop:'10px' }} as={Col} controlId="validationCustom03">
                        <Form.Label style={{ color: "black", fontSize: "15px", fontWeight: 'bold', marginLeft: "5px" }}>CATEGORY</Form.Label>
                      </Form.Group>
                      <Col md="8">
                        <Form.Select
                          style={{ height: "38px" ,width:"320px",borderColor: "black",borderRadius:"3px"}}
                          required
                        >
                          <option value="">Select a category</option>
                          <option value="option1">Basic</option>
                          <option value="option2">Active</option>
                          <option value="option3">Executive</option>
                          {/* Add more options as needed */}
                        </Form.Select>
                        {/* <Form.Control.Feedback type="invalid">
                          Please select a category.
                        </Form.Control.Feedback> */}
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group style={{marginTop:'10px'}} as={Col} controlId="validationCustom05">
                        <Form.Label style={{ color: "black", fontSize: "15px",fontWeight:'bold',marginLeft:"5px" }}>TESTS INCLUDED</Form.Label>
                      </Form.Group>
                      <Col md="8">
                        <Form.Control
                          style={{ height: "38px",borderColor: "black" }}
                          type="text"
                          placeholder="Enter the number of tests included"
                          required
                        />
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group style={{marginTop:'10px'}} as={Col} controlId="validationCustom05">
                        <Form.Label style={{ color: "black", fontSize: "15px",fontWeight:'bold',marginLeft:"5px" }}>PRICE</Form.Label>
                      </Form.Group>
                      <Col md="8">
                        <Form.Control
                          style={{ height: "38px",borderColor: "black" }}
                          type="text"
                          placeholder="Enter the Amount"
                          required
                        />
                      </Col>
                    </Row>

                     {/* <Form.Group as={Row} className="mb-3" style={{ marginTop: '10px' }}>
                      <Form.Label column sm={2} style={{ color: "black", fontSize: "15px", fontWeight: 'bold', marginLeft: "5px" }}>
                        UPLOAD IMAGE
                      </Form.Label>
                      <Col md={8}>
                        <Form.File 
                          id="exampleFormControlFile1"
                          label="Choose an image"
                          style={{ height: "38px", borderColor: "black" }}
                        />
                      </Col>
                    </Form.Group> */}

                    <Form.Group className="mb-3" controlId="formBasicImage">
                              <Form.Label>Upload Image</Form.Label>
                              <Form.Control
                                type="file"
                                name="image"
                              
                              />
                    </Form.Group>


                    <Row className="mb-3">
                      <Col md={{ span: 7, offset: 5 }}>
                        <Button type="submit" style={{ backgroundColor: "#007bff",marginLeft:"-10px",marginTop:"10px" }}>ADD PACKAGE</Button>&nbsp;                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Icons;
