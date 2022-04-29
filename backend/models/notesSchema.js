const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const notesSchema = mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    timestamp:{
        type:Date,
        default:Date.now
    }
})

const Note=mongoose.model('note',notesSchema);
module.exports=Note;