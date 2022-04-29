import React from 'react'
import { NavLink } from 'react-router-dom';

const Home1 = () => {
    return (
        <>
            <div className="homePg">
                <div className="homePg1">
                    {/* <div className="row"> */}
                        <div className="homeBgleft">
                            <div className="homePgTxt">
                                <h2 className="homePgTxt1">Welcome to <span style={{color:'#0d6efd'}}>iNotes</span></h2>
                                <h3 className="homePgTxt1">We hold your notes longer, better, and higher.</h3>
                                <p style={{color:'#e328d8'}} className="homePgTxt3">SignUp and Login to continue with iNotes</p>
                                <div className="homeBtns">
                                <NavLink className="btn btn-outline homeBtn" id="homeSignUp" to='/signup'>SIGNUP</NavLink>
                                <NavLink className="btn btn-outline homeBtn" id="homeLogin" to='/login'>LOGIN</NavLink>
                            </div>
                            </div>
                        </div>
                        <div className="homeBgright">
                            <div className="homeBg">
                                <img src="../images/homeBg.svg" alt="bg" className="animated"/>
                            </div>
                            
                        </div>

                    {/* </div> */}
                </div>
            </div>

        </>
    )
}

export default Home1;