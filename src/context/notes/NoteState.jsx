import React, { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {
    const host = "http://localhost:4100"
    const notesInitial = [];

    const [notes, setnotes] = useState(notesInitial)

    // to fetch all the notes
    const fetchallnotes = async () => {
        try {
            const response = await fetch(`${host}/notes/fetchallnotes`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                }
            })
            const json = await response.json();
            console.log(json);
            setnotes(json)
        }
        catch (err) {
            console.log('internal server error')
        }
    }


    // to add a note
    const addnote = async (title, description) => {
        try {
            const response = await fetch(`${host}/notes/addnote`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify({ title, description })
            })
            let data = await response.json();
            setnotes(notes.concat(data.savedNote))
            props.showAlert('Note added successfully',"success")
        }
        catch (err) {
            props.showAlert('Some internal error occured! Please try again after sometime',"danger")
        }
    }



    // to edit a note
    const editnote = async (id, title, description) => {
        console.log(id, title, description);
        try {
            const response = await fetch(`${host}/notes/updatenote/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify({ title, description })
            });

            let data = await response.json();
            console.log(data.note);
            // logic to edit in client
            var tempArr = [];
            for (let index = 0; index < notes.length; index++) {
                const element = notes[index];
                if (element._id === id) {
                    element.title = data.note.title;
                    element.description = data.note.description;
                }
                tempArr.push(element)
            }
            setnotes(tempArr)
           if(data.success){
            props.showAlert('Note updated sucessfully',"success")
           }
           else{
            props.showAlert(data.message,data.type)
           }
        }
        catch (err) {
            props.showAlert('Some internal error occured! Please try again after sometime',"danger")
        }

    }

    // to delete a note
    const deletenote = async (id) => {
        console.log(id);
        try {
            const response = await fetch(`${host}/notes/deletenote/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                },
            })

            const data = await response.json();
           
            const newNotes = notes.filter((note) => { return note._id !== id })
            setnotes(newNotes);
            if(data.success){
            props.showAlert('Note deleted successfully',"success")
            }
            else{
            props.showAlert(data.message,data.type)
            }
        } catch (err) {
            props.showAlert('Some internal error occured! Please try again after sometime',"danger")
        }
    }



    return (
        <NoteContext.Provider value={{ notes, setnotes, fetchallnotes, addnote, editnote, deletenote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState
