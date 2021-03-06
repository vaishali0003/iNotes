import React, { useContext, useEffect, useState } from 'react'
import noteContext from '../context/notes/noteContext'

const NoteItem = (props) => {

    let context=useContext(noteContext)

    const {deletenote}=context

    const { note,updatenote } = props

    const [flag, setFlag] = useState(true);
    useEffect(()=>{
        if(localStorage.getItem('mode'))
        {   
            if(localStorage.getItem('mode')==='darkmode')
            {
                setFlag(false);
            }
            else
            {
                setFlag(true);
            }
        }
        else
        {
            setFlag(true);
        }
    },[]);

    return (
        <>
            <div className={flag ? 'card' : 'card cardDark'}>
                <div className="tick">
                    <img src="../images/check.svg" className="cardImg" alt="tick" />
                </div>
                <div className="card-body">
                    <p className="card-text noteTitle" style={{fontWeight:"500"}}>{note.title}</p>
                    <p className="card-text noteDesc">{note.description}</p>
                </div>
                <div className="editingIcons">
                    <img src="../images/edit.svg" className="editingIcon cardImg" alt="edit" onClick={()=>{updatenote(note)}}/>
                    <img src="../images/delete.svg" className="editingIcon cardImg" alt="delete" onClick={()=>{deletenote(note._id)}}/>
                </div>
            </div>
        </>
    )
}

export default NoteItem