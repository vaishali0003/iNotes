import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

  const capitalize=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
    }

  const navigate=useNavigate();

  const [data, setData] = useState({name:'',email:'',phone:'',proffession:''})

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
    else{
      navigate('/login')
        // eslint-disable-line react-hooks/exhaustive-deps
    }
  }, [])

  return (
    <>
      <div className="aboutElem">
        <div className="aboutBox">
          <div className="row d-flex justify-content-center">
            <div className="col-md-5 col-11 d-flex justify-content-center">
              <div className="aboutBox1">
                <div className="aboutImg">
                <img src="../images/About.svg" alt="aboutImage" className='animated img-fluid'/>
                </div>
              </div>
            </div>

            <div className="col-md-7 col-11 d-flex justify-content-center">
              <div className="aboutBox2">
                <div className="abouInfo1">
                  <h4>Welcome {capitalize(data.name)}</h4>
                  <p style={{fontWeight:"500",color:"#332e2e8a"}} className='proffession'>{capitalize(data.proffession)}</p>
                  <p>RANKINGS:1/10</p>
                </div>

                <div className="aboutInfo2">
                  <div className="infoHeadings">
                    <p className='aboutTxt' style={{color:'rgb(227, 40, 216)',fontWeight:"800"}}>About</p>
                  </div>
                  <ul className="infoList">
                    <li className="infoListName">
                      <div className="infoListName1">
                      <p id="userInfo1">User id</p>
                    <p id="userInfo2">{data._id}</p>
                      </div>
                    </li>
                    <li className="infoListName">
                    <div className="infoListName1">
                    <p id="userInfo1">Name</p>
                    <p id="userInfo2">{data.name}</p>
                    </div>
                    </li>
                    <li className="infoListName">
                    <div className="infoListName1">
                    <p id="userInfo1">Email</p>
                    <p id="userInfo2">{data.email}</p>
                    </div>
                    </li>
                    <li className="infoListName">
                    <div className="infoListName1">
                    <p id="userInfo1">Phone</p>
                    <p id="userInfo2">{data.phone}</p>
                    </div>
                    </li>
                    <li className="infoListName">
                    <div className="infoListName1">
                    <p id="userInfo1">Proffession</p>
                    <p id="userInfo2">{data.proffession}</p>
                    </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About