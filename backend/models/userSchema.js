const mongoose=require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true
    },
    proffession:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
    },
    messages:[
        {
            name:{
                type:String,
                required:true
            },
            email:{
                type:String,
                required:true,
            },
            phone:{
                type:Number,
                required:true
            },
            message:{
                type:String,
                required:true,
            }
        }
    ],
    timestamp:{
        type:Date,
        default:Date.now
    }
})

UserSchema.pre('save',async function(next){

    if(this.isModified('password')){
        console.log(`the current password is ${this.password}`)
        this.password=await bcrypt.hash(this.password,10);
        console.log(`the bcrypted password is ${this.password}`)

        // this.cpassword=undefined;
    }
    next();
})

// store the message
UserSchema.methods.addMessage=async function(name,email,phone,message){
try{
this.messages=this.messages.concat({name,email,phone,message})
await this.save();
return this.messages;
}
catch(err){
    console.log(err)
}
}

const User=mongoose.model('user',UserSchema);
// User.createIndexes();
module.exports=User;