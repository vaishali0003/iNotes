import React, { useState } from 'react'
// import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Errorpage from './Components/Errorpage'
import NoteState from './context/notes/NoteState'
import Alert from './Components/Alert'
import Theme from './Components/Theme'


const App = () => {

  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }


  return (
    <>
      <NoteState showAlert={showAlert}>
        <Theme showAlert={showAlert}/>
        <div className="main">
          <Alert alert={alert} />
          <Routes>
            <Route path='/' element={<Home showAlert={showAlert} />} />
            <Route path='/contact' element={<Contact showAlert={showAlert} />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login showAlert={showAlert} />} />
            <Route path='/signup' element={<Signup showAlert={showAlert} />} />
            <Route path='*' element={<Errorpage />} />
          </Routes>
        </div>
      </NoteState>
    </>
  )
}

export default App
