import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const Contact = (props) => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  function onChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const callUser = async () => {
    try {
      const response = await fetch('http://localhost:4100/auth/getuser', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
      })
      const json = await response.json();
      console.log(json);
      setData(json.user)
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if(localStorage.getItem('token')){
      callUser();
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = data;
    try {
      const response = await fetch('http://localhost:4100/auth/contact', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({ name, email, phone, message })
      })
      const json = await response.json();
      // console.log(json);
      if (json.success) {
        props.showAlert('Message sent successfully','success')
        setData({ ...data, message: "" })
      } else {
        props.showAlert('Message not sent! PLease try again','danger')
        navigate('/')
      }
    }
    catch (err) {
      console.log(err);
    }
  }


  return (
    <>
      <div className="container-fluid">
        <div className="contactMain1 col-lg-10 mx-auto">
          <div className="row d-flex justify-content-around">
            <div className="col-md-4 cBoxMain">
              <div className="cBox">
                <div className="cIcon">
                  <img src="../images/mNum.svg" alt="phoneImage" />
                </div>
                <div className="cInfo">
                  <h6 className="cInfo1">Phone</h6>
                  <p className="cInfo2">+91 111 543 2198</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 cBoxMain">
              <div className="cBox">
                <div className="cIcon">
                  <img src="../images/mEmail.svg" alt="emailImage" />
                </div>
                <div className="cInfo">
                  <h6 className="cInfo1">Email</h6>
                  <p className="cInfo2">vaishalidwivedi673@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 cBoxMain">
              <div className="cBox">
                <div className="cIcon">
                  <img src="../images/cAddress2.svg" alt="addressImage" />
                </div>
                <div className="cInfo">
                  <h6 className="cInfo1">Address</h6>
                  <p className="cInfo2">Sagar,(M.P.),India</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="contactMain2 col-lg-8 mx-auto">
          <div className="col-md-9 contactMain21 mx-auto">
            <h1 className="Sheading cHeading">Get in Touch</h1>
            <form method="POST" className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-4">
                <input type="text" className="form-control cInput" id="cName" placeholder='Your name' name="name" value={data.name} onChange={onChange} />
              </div>
              <div className="col-md-4">
                <input type="email" className="form-control cInput" id="cEmail" placeholder='Your email' name="email" value={data.email} onChange={onChange} />
              </div>
              <div className="col-md-4">
                <input type="phone" className="form-control cInput" id="cPhone" placeholder='Your Phone Number' name='phone' value={data.phone} onChange={onChange} />
              </div>
              <div className="col-md-12">
                <label htmlFor="textarea"></label>
                <textarea className="form-control cInput" id="cMsg" rows="6" placeholder='Message' name='message' onChange={onChange}></textarea>
              </div>
              <div className="mb-3">
                <button disabled={!localStorage.getItem('token')} className="btn btn-primary rBtn sendMsgBtn">Send Message</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default Contact