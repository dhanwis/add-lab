import React, { useState } from 'react';
import {
  // MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from 'mdb-react-ui-kit';
import img from "./log.jpg";
import backgroundImg from "./lbmin6.png";
import userGif from "./man.gif"; // Replace with the correct path to your user GIF
import { Button } from 'react-bootstrap';
import { loginAPI } from 'services/allAPI';
import { useNavigate } from 'react-router-dom';

function App() {


  const navigate=useNavigate()
  const [userData, setuserData] = useState({
    username: "",
    password: ""
  })

  console.log(userData);

  const handlelogin = async (e) => {
    e.preventDefault()
    const { username, password } = userData
    if (!username || !password) {
      alert('please fill the form completely')
    }
    else {
      const result = await loginAPI(userData)
      // toast.success('login successful')
      console.log(result);
      if (result.status == 200) {
        // alert
        alert('login successfull')

        // navigate
        navigate('/admin/dashboard')


        // store
        sessionStorage.setItem("existinguser", JSON.stringify(result.data.user.email))
        sessionStorage.setItem("token", (result.data.access))
        

        //state empty
        setuserData({
          username: "",
          password: ""
        })

      }
      else {
        alert(result.response)
      }
    }

  }





  return (
    <div style={{
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      marginTop: '-10',
      // backgroundAttachment: 'fixed', 
      height: '100vh',
      // margin: 0, 
      // padding: 0 
    }}>
      <MDBContainer className=' d-flex justify-content-center'>
        <MDBCard style={{ maxWidth: '900px', marginTop: '80px', maxHeight: '1000px' }}>
          <MDBRow className='g-0 d-flex align-items-center'>
            <MDBCol md='5'>
              <MDBCardImage src={img} alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
            </MDBCol>
            <MDBCol md='7'>
              <div className='text-center' style={{ top: '35%' }}>
                <h5 style={{ marginBottom: '20px', fontWeight: 'bold', fontSize: "35px", color: "#0a9a73" }}>Welcome to DLabs...</h5>
              </div>
              <MDBCardBody className='text-center' style={{ height: "140%" }}>
                <div style={{ position: 'relative', marginBottom: '80px' }}>
                  <img
                    src={userGif}
                    alt='user'
                    style={{
                      width: '80px',
                      height: '80px',
                      position: 'absolute',
                      top: '-20px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      marginBottom: "12px"
                    }}
                  />
                </div>
                <div>
                  <MDBInput
                    wrapperClass='mb-4'
                    id='form1'
                    type='text'
                    style={{ width: '75%', margin: '0 auto' }}
                    placeholder='Username'
                    value={userData.username}
                    onChange={(e) => setuserData({ ...userData, username: e.target.value })}
                  />
                  <MDBInput
                    wrapperClass='mb-4'
                    id='form2'
                    type='password'
                    style={{ width: '75%', margin: '0 auto' }}
                    placeholder='Password'
                    value={userData.password}
                    onChange={(e) => setuserData({ ...userData, password: e.target.value })}
                  />
                </div>
                {/* <div className="d-flex justify-content-between mx-4 mb-4" style={{ width: '75%', margin: '0 auto' }}>
                  <a href="#!" style={{ color: "green", marginLeft: "125px" }}>Forgot password?</a>
                </div> */}
                {/* <MDBBtn className="mb-5 w-50" style={{ backgroundColor: "#0a9a73", color: "white", marginLeft: "5%" }}>
                  Sign in
                </MDBBtn> */}
                <Button onClick={handlelogin} className='bn' type='submit' style={{ backgroundColor: "#0a9a73", color: "white", width: "50%" }}>LOGIN</Button>
                <div className="d-flex justify-content-between mx-4 mb-4" style={{ width: '75%', margin: '0 auto' }}>
                  <a href="#!" style={{ color: "green", marginLeft: "165px", marginTop: "15px" }}>Forgot password?</a>
                </div>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default App;
