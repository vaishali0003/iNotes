import React, { useContext, useRef, useState,useEffect } from 'react'
import noteContext from '../context/notes/noteContext'
import AddItem from './AddItem'
import NoteItem from './NoteItem'

const Notes = () => {

    const context = useContext(noteContext)
    const { notes, editnote,fetchallnotes } = context

    useEffect(() => {
        if(localStorage.getItem('token')){
            fetchallnotes();
        }
        else{
           console.log('please login')
        }
    }, []);
    

    const ref = useRef(null);
    const closeRef=useRef(null);

    const [note, setEnote] = useState({ id: "", etitle: "", edescription: "" })

    const updatenote = (currentNote) => {
        ref.current.click();
        console.log(currentNote)
        setEnote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description })
    }

    const onChange = (e) => {
        console.log(e.target.value)
        setEnote({ ...note, [e.target.name]: e.target.value })
        // console.log(note);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(note);
        editnote(note.id,note.etitle,note.edescription);
        closeRef.current.click();
    }

    return (
        <>
            <div className="notesSection1">
                <AddItem />
            </div>

            <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={ref}>
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form method="POST" onSubmit={handleSubmit}>
                                <input type="text" name="etitle" placeholder='Title...' onChange={onChange} value={note.etitle} />
                                <textarea id="description" name="edescription" rows="3" placeholder='Take a note...' onChange={onChange} value={note.edescription}></textarea>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={closeRef}>Close</button>
                                    <button type="submit" className="btn btn-primary" >Update Note</button>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </div>



            <div className="notesSection2">
                <div className="cards row">
                {(notes.length!==0)?notes.map((note, index) => {
                        return <NoteItem note={note} key={index} updatenote={updatenote} />
                    }):<>
                    <div className="notesBg">
                        <div className="notesBgImg">
                        <img src="../images/notesBg2.png" alt="notesBg" />
                        </div>
                        <p className="notesBgTxt">Your Notes will appear here</p>
                    </div>
                    </>}
                </div>
            </div>
        </>
    )
}

export default Notes