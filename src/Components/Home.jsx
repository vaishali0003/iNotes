import React from 'react'
import Home1 from './Home1'
import Notes from './Notes'

const Home = () => {

  return (
    <>
      {
        (!localStorage.getItem('token') ? <Home1 /> : <> <div className="notesSection">
          <Notes />
        </div></>)
      }
    </>
  )
}

export default Home