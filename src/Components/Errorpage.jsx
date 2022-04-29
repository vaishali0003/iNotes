import React from 'react'
import { NavLink } from 'react-router-dom'

const Errorpage = () => {
    return (
        <div>
            <div className="errorPage">
                <div className="errorPageBg">
                    <h1 className='text-center'>404</h1>
                </div>
                <div className="errorPageTxt">
                <h2>We are sorry , page not found!</h2>
                <p className="mb-4 mt-1 errorTxt">
                    THE PAGE YOU ARE LOOKING MIGHT HAVE BEEN REMOVED ,HAS ITS NAME CHANGED OR IS TEMPORARY UNAVAILABLE
                </p>
             <NavLink className="btn btn-primary backToHomeBtn" to="/">BACK TO HOMEPAGE</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Errorpage