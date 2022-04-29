const mongoose=require('mongoose');

const mongoURI='mongodb+srv://Vaishali03:adolfhitler@cluster0.189tc.mongodb.net/thmern';

mongoose.connect(mongoURI).then(()=>{
    console.log('Database Connected');
}).catch((error)=>{
    console.log('errrrorr')
    console.log(error);
});