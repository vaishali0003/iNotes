import React, { useEffect } from 'react'
import { NavLink, useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Navbar = (props) => {

    const navigate = useNavigate();
    const location=useLocation();
    const handleLogout = () => {
        localStorage.removeItem('token');
        props.showAlert('User logged out successfully','success');
        navigate('/login');
    }

    useEffect(() => {
        themeChanger();
        // eslint-disable-line react-hooks/exhaustive-deps
    }, [location.pathname]);


    const themeChanger = () => {
        if (localStorage.getItem('mode') === 'darkmode') {
            props.darkMode();
        } else {
            props.lightMode();
        }
    }

    const toggleTheme = () => {
        if (localStorage.getItem('mode') === 'lightmode') {
            props.darkMode();
        }
        else {
            props.lightMode();
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
                <div className="container-fluid">
                    <NavLink className="logoHeading" to="/"><div className='disc'><div className="disc1"><div className="disc2"></div></div></div><span className='black'>INO</span><span className='blue'>TES</span></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>

                            {!localStorage.getItem('token') ? <> <li className="nav-item">
                                <NavLink className="nav-link" to="/signup">SignUp</NavLink>
                            </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login">Login</NavLink>
                                </li></> : <li className="nav-item">
                                <NavLink className="nav-link" to="/login" onClick={handleLogout}>Logout</NavLink>
                            </li>}

                            <li className="nav-item">
                                <button className="nav-link toggleBtn" onClick={toggleTheme}>Change-Theme</button>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar