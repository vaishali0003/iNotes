const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Note = require('../models/notesSchema');

JWT_SECRET = 'vaishaliisaverygoodandsweettalentedgirl';

const bcrypt = require('bcrypt');
var fetchuser = require('../middleware/fetchuser');
var jwt = require('jsonwebtoken');

// fetch all the notes
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send("Internal server error");
    }
})

// fetch all the notes
router.post('/addnote', fetchuser, async (req, res) => {
    let success=false;
    try {
        const { title, description } = req.body
        
        const note = new Note({
            title: title,
            description: description,
            user: req.user.id
        })

        const savedNote = await note.save();
        success=true;
        res.json({ success,savedNote });
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send("Internal server error");
    }
})


// updating a note -----login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description } = req.body
    let success=false;
    try {
        // create a newNote object
        let newNote = {};
        if (title) {
            newNote.title = title
        }
        if (description) {
            newNote.description = description;
        }

        // find the note to be updated and update it
        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ type:"danger",message: "note not found" })
        }


        // check whether the note belongs to the user
        
        if (note.user.toString() !== req.user.id) {
            return res.status(401).json({ type:"danger",message: "Not allowed" })
        }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        success=true;
        res.json({success,note});
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send("Internal server error");
    }
})



// updating a note -----login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
         // find the note to be updated and update it
         let note = await Note.findById(req.params.id);
         if (!note) {
             return res.status(404).json({ message: "Note not found" ,type:"danger"})
         }


          // check whether the note belongs to the user
        if (note.user.toString() !== req.user.id) {
            return res.status(401).json({ message: "Not allowed",type:"danger"})
        }

        note=await Note.findByIdAndDelete(req.params.id)
        res.json({'success':'Note has been deleted',note:note})

    }
    catch (err) {
        console.log(err.message);
        res.status(500).send("Internal server error");
    }
})

module.exports = router;