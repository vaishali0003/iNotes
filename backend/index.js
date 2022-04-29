const dotenv=require('dotenv');
require('./db/conn');
const express = require('express');
const auth=require('./router/auth');
const notes=require('./router/notes')
const app = express();
var cors = require('cors')

app.use(cors())

app.use(express.json());

dotenv.config({path:'./config.env'});

// we link the router files to make our route easy
app.use('/auth',auth);
app.use('/notes',notes);

const port = 4100;


app.listen(port, () => {
    console.log(`listening to port ${port}`);
})