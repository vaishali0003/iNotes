import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" })

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const { email, password } = credentials;
      const response = await fetch('http://localhost:4100/auth/login', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })
  
      const json = await response.json();
      // console.log(json);
  
      if (json.success) {
       props.showAlert('User logged in successfully','success');
        localStorage.setItem('token', json.authToken);
        navigate('/');
      }
      else {
        props.showAlert(json.message,json.type);
        navigate('/login');
      }
    }
    catch {
      props.showAlert('Some Internal error occured','danger');
  }
  }

  return (
    <><div className="signUpElem">
      <div className="loginBox signUpBox">
        {/* <div className="row"> */}

          {/* <div className="col-md-7 col-12"> */}
            <div className="loginBox1">
              <div className="img">
                <img src="../images/Login4.svg" alt="loginImage" className='img-fluid animated'/>
              </div>
            </div>
          {/* </div> */}

          {/* <div className="col-md-5 col-12"> */}
            <div className="loginBox2">
              <h1 className="Sheading">Login</h1>
              <form method="POST" className="signUpForm" onSubmit={handleSubmit}>
                <div className="mb-3 form-group">
                  <label htmlFor="email"><img src="../images/mUser.svg" className="signUpIcon" alt="user" /></label>
                  <input type="email" id="email" className="fIn" name="email" placeholder='Your Email' autoComplete='off' onChange={onChange} required/>
                </div>
                <div className="mb-3 form-group">
                  <label htmlFor="icon"><img src="../images/mConfP.svg" className="signUpIcon" alt="user" /></label>
                  <input type="password" id="password" className="fIn" name="password" placeholder='Password' autoComplete='off' onChange={onChange} minLength="1" required/>
                </div>
                <div className="mb-3">
                  <button className="btn btn-primary rBtn">Login</button>
                </div>
              </form>
            </div>
          {/* </div> */}
        {/* </div> */}
      </div>
    </div></>
  )
}

export default Login