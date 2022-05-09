import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    proffession: "",
    password: "",
    cpassword: ""
  })

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, proffession, password, cpassword } = user;

    const response = await fetch('http://localhost:4100/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, phone, proffession, password,cpassword})
    })
    const json = await response.json();
    console.log(json);

    if(json.success){
      props.showAlert('User signed in successfully','success');
      navigate('/login');
      console.log('if')
    }else{
      props.showAlert(json.message,json.type);
      console.log('else');
    }
  }

  return (
    <>
      <div className="signUpElem">
        <div className="signUpBox signUpBoxAlt">
              <div className="signUpBox1">
                <h1 className="Sheading">Sign Up</h1>
                <form method="POST" className="signUpForm" onSubmit={handleSubmit}>
                  <div className="mb-3 form-group">
                    <label htmlFor="icon"><img src="../images/mUser.svg" className="signUpIcon" alt="user" /></label>
                    <input type="text" id="name" className="fIn" name="name" placeholder='Your Full Name' autoComplete='off' onChange={onChange} value={user.name} minLength="3" required/>
                  </div>
                  <div className="mb-3 form-group">
                    <label htmlFor="icon"><img src="../images/mEmail.svg" className="signUpIcon" alt="user" /></label>
                    <input type="email" id="email" className="fIn" name="email" placeholder='Your Email' autoComplete='off' onChange={onChange} value={user.email} required/>
                  </div>
                  <div className="mb-3 form-group">
                    <label htmlFor="icon"><img src="../images/mNum.svg" className="signUpIcon" alt="user" /></label>
                    <input type="phone" id="phone" className="fIn" name="phone" placeholder='Your Number' autoComplete='off' onChange={onChange} value={user.phone} required/>
                  </div>
                  <div className="mb-3 form-group">
                    <label htmlFor="icon"><img src="../images/mProf.svg" className="signUpIcon" alt="user" /></label>
                    <input type="text" id="message" className="fIn" name="proffession" placeholder='Your Proffession' autoComplete='off' onChange={onChange} value={user.proffession} required/>
                  </div>
                  <div className="mb-3 form-group">
                    <label htmlFor="icon"><img src="../images/mPass.svg" className="signUpIcon" alt="user" /></label>
                    <input type="password" id="password" className="fIn" name="password" placeholder='Your Password' autoComplete='off' onChange={onChange} value={user.password} minLength="5" required/>
                  </div>
                  <div className="mb-3 form-group">
                    <label htmlFor="icon"><img src="../images/mConfP.svg" className="signUpIcon" alt="user" /></label>
                    <input type="password" id="cpassword" className="fIn" name="cpassword" placeholder='Confirm Password' autoComplete='off' onChange={onChange} value={user.cpassword} required/>
                  </div>
                  <div className="mb-3">
                    <button className="btn btn-primary rBtn">Register</button>
                  </div>
                </form>
              </div>
              <div className="signUpBox2">
                <div className="img">
                  <img src="../images/SignUp2.svg" alt="signupImage" className="img-fluid animated" />
                </div>
                <div className="txt">Already a registered user? <NavLink style={{color:'#e328d8'}} className='lg1' to='/login'>Login</NavLink></div>
              </div>
        </div>
      </div>
    </>
  )
}

export default Signup