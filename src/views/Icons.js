import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import backgroundImage from './lbmin6.png';
import { addpackageAPI } from "services/allAPI";
import axios from "axios";
import { BASE_URL } from "services/baseurl";

function Icons() {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const [token,setToken]=useState("")


  const [packageData, setpackageData] = useState({
    lab_name: "",
    tests: "",
    price: "",
    packageimage: "",
   

  })
  console.log(packageData);


  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      console.error("No file selected");
      return;
    }

    try {

    
      setpackageData({
        ...packageData,
        packageimage: file,
       
      });

    } catch (error) {
      console.error("Error creating in object URL:", error);
    }
  };


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



  useEffect(()=>{
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
      
    }
    else{
      setToken("")
    }
  },[])

  const handleaddPackage = async (e) => {
    e.preventDefault()

    const { lab_name, tests, price, packageimage } = packageData

    if (!lab_name || !tests || !price || !packageimage) {
      alert('please fill the form completely')
    }
    else {
      // reqbody
      // 1)create object for formdata--since we  have uploaded the content--new method is used to create a object
      const reqbody = new FormData()
      // 2)add data to formdata-append()
      reqbody.append("lab_name", lab_name)
      reqbody.append("tests", tests)
      reqbody.append("price", price)
      reqbody.append("packageimage", packageimage)


     
      const reqheader = {
        "Content-Type": "multipart/form-data",
 "Authorization":`Bearer ${token}`
      }

      const result = await addpackageAPI(reqbody, reqheader)
      console.log("this is result", result);
      if (result.status === 200) {

        console.log(result.data);
        alert('package added succesfully')
      }
      else {
        alert(result.response.data);
      }

    
  }

  }



  return (
    <div className="content" style={{ backgroundImage: `url(${backgroundImage})`, height: "100vh", backgroundSize: "cover", backgroundPosition: "center", opacity: '0.9' }}>
      <Container>
        <Row className="justify-content-center align-items-center" style={{ height: "100%" }}>
          <Col md={6}>
            <div className="form-container" style={{ marginTop: "100px" }}>
              <Card className="form-card" style={{ border: "2px solid white", backgroundColor: "white", opacity: "0.9" }}>
                <Card.Body className="labs">
                  <h2 className="text-center mt-4 form-title" style={{ color: 'black' }}>ADD PACKAGE</h2>
                  <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ height: "310px" }}>
                    <Form.Group as={Row} controlId="packageName" style={{ marginBottom: "20px" }}>
                      <Form.Label column sm="3" style={{ color: 'black', fontSize: '14px', fontWeight: "bold", whiteSpace: "nowrap", textAlign: "right", paddingRight: "15px" }}>Package Name :</Form.Label>
                      <Col sm="8">
                        <Form.Control style={{ width: "100%", borderRadius: '16px', border: "1px solid black" }}
                          className="form-control-styled"
                          required
                          type="text"
                          placeholder="Enter package name"
                          value={packageData.lab_name}
                          onChange={(e) => setpackageData({ ...packageData, lab_name: e.target.value })}
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="testsIncluded" style={{ marginBottom: "20px" }}>
  <Form.Label column sm="3" style={{ color: 'black', fontSize: '14px', fontWeight: "bold", whiteSpace: "nowrap", textAlign: "right", paddingRight: "15px" }}>
    Tests included :
  </Form.Label>
  <Col sm="8">
    <Form.Control
      as="select"
      style={{ width: "100%", borderRadius: '16px', border: "1px solid black" }}
      className="form-control-styled"
      required
      value={packageData.tests}
      onChange={(e) => setpackageData({ ...packageData, tests: e.target.value })}
    >
      <option value="">Select tests included</option>
      <option value="test1">Blood Test</option>
      <option value="test2">Urine Test</option>
      <option value="test3">Test 3</option>
      {/* Add more options as needed */}
    </Form.Control>
  </Col>
</Form.Group>


                    <Form.Group as={Row} controlId="price" style={{ marginBottom: "20px" }}>
                      <Form.Label column sm="3" style={{ color: 'black', fontSize: '14px', fontWeight: "bold", whiteSpace: "nowrap", textAlign: "right", paddingRight: "15px" }}>Package Price :</Form.Label>
                      <Col sm="8">
                        <Form.Control style={{ width: "100%", borderRadius: '16px', border: "1px solid black" }}
                          className="form-control-styled"
                          type="number"
                          placeholder="Enter price"
                          required
                          value={packageData.price}
                          onChange={(e) => setpackageData({ ...packageData, price: e.target.value })}

                        />
                      </Col>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formImage'>
                      <Form.Label>Upload Image</Form.Label>
                      <Form.Control type='file' onChange={handleFileChange} />
                      {packageData.packageimage && (
                        <div className='mt-2'>
                          <img src={packageData.packageimage} alt='Movie' style={{ maxWidth: '100%', height: '400px' }} />
                        </div>
                      )}

                    </Form.Group>


                    <Row>
                      <Col className="text-center">
                        <Button onClick={handleaddPackage} className="bn" type="submit" style={{ backgroundColor: "green", marginTop: "8px", padding: "10px 55px", marginLeft: "21px", borderRadius: '3px', color: "white" }}>ADD</Button>
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
