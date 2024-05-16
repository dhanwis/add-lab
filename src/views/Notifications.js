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
/*eslint-disable*/
import React from "react";
import { useState } from "react";
import { Card, Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";

function Notifications() {
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
              {/* <img src={}/> */}
            </Col>
            <Col md={{ span: 7, offset: 0 }}>
              <Card style={{backgroundColor:'white',boxShadow:'none'}}>
                <Card.Body className="labs">
                  <h2 className="text-center mt-4" style={{ fontFamily: "Helvetica",fontWeight:'bold' }}>ADD DOCTOR</h2>
                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Group style={{marginTop:'10px'}} as={Col} controlId="validationCustom01">
                        <Form.Label style={{ color: "black", fontSize: "15px",fontWeight:'bold',marginLeft:"5px"}}>NAME</Form.Label>
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
                        <Form.Label style={{ color: "black", fontSize: "15px",fontWeight:'bold',marginLeft:"5px" }}>QUALIFICATION</Form.Label>
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
                        <Form.Label style={{ color: "black", fontSize: "15px",fontWeight:'bold',marginLeft:"5px" }}>SPECIALIZATION</Form.Label>
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
                        <Form.Label style={{ color: "black", fontSize: "15px", fontWeight: 'bold', marginLeft: "5px" }}>DEPARTMENT</Form.Label>
                      </Form.Group>
                      <Col md="8">
                        <Form.Select
                          style={{ height: "38px" ,width:"320px",borderColor: "black",borderRadius:"3px"}}
                          required
                        >
                          <option value="">Select a category</option>
                          <option value="option1">Endocrinology</option>
                          <option value="option2">Hematology</option>
                          <option value="option3">Immunology</option>
                          <option value="option3">Pathology</option>
                          <option value="option3">Serology</option>
                          <option value="option3">Microbiology</option>
                          <option value="option3">Urinalysis</option>
                          <option value="option3">Cardiology</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          Please select a category.
                        </Form.Control.Feedback>
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
                      <Col md={{ span: 7, offset: 5 }}>
                        <Button type="submit" style={{ backgroundColor: "#007bff",marginLeft:"-10px",marginTop:"10px" }}>ADD DOCTOR</Button>&nbsp;                      </Col>
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

export default Notifications;
