const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/userSchema');

JWT_SECRET='vaishaliisaverygoodandsweettalentedgirl';

const bcrypt = require('bcrypt');
var fetchuser = require('../middleware/fetchuser');
var jwt = require('jsonwebtoken');


// to register user 
router.post('/register', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be atleast 5 characters long').isLength({ min: 5 }),
],
  async (req, res) => {
    let success=false;
    const { name, email, phone, proffession, password, cpassword } = req.body;

    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try { 
      // check whether the email already exists or not
      let user = await User.findOne({ email: email })
      if (user) {
        return res.status(401).json({ type:"danger",message: 'Sorry a user with this email already exists' });
      }

      if (password != cpassword) {
        return res.status(401).json({ type:"danger",message: 'Password and confirm password do not match' });
      }

      user = new User({
        name: name,
        email: email,
        phone: phone,
        proffession: proffession,
        password: password,
        // cpassword: cpassword
      })


      await user.save();
      // res.status(201).send(newuser);

      const data = {
        user: {
          id: user.id
        }
      }


      const authToken = jwt.sign(data, JWT_SECRET);
      success=true;
      res.json({success:success,authToken });
    }

    catch (error) {
      console.log(error);
      res.status(501).json({ message: 'Internal server error' })
    }

  })


// for login in user ---- auth required
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password should not be blank').exists(),
],
  async (req, res) => {
let success=false;
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      let tempArr=[];
      // console.log(errors.array());
      for(let i of errors.array())
      {
        console.log("yes");
        tempArr.push(i.msg+", ");
      }
      console.log(tempArr.toString().slice(0,-2));
      return res.status(400).json({message: tempArr.toString().slice(0,-2),type:"danger" });
    }
    const { email, password } = req.body;

    try {
      // check whether the email already exists or not
      let user = await User.findOne({ email: email })
      if (!user) {
        return res.status(401).json({message: 'Please login using correct Credentials',type:"danger" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({message: 'Please login using correct Credentials',type:"danger" });
      }

      const data = {
        user: {
          id: user.id
        }
      }

     success=true;
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ success,authToken });

    }

    catch (error) {
      console.log(error);
      res.status(501).json({ message: 'Internal server error' })
    }

  })

// get logged in user details : Login required
router.get('/getuser', fetchuser, async (req, res) => {

  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.json({ user });
  }

  catch (error) {
    console.log(error);
    res.status(501).json({ message: 'Internal server error' })
  }
})

// get logged in user details : Login required
router.get('/about', fetchuser, async (req, res) => {
  res.json({message:"Welcome to about page"});

})

// get logged in user details : Login required
router.post('/contact', fetchuser, async (req, res) => {
let success=false;
  try{
    const {name,email,phone,message}=req.body;
    const userContact=await User.findOne({_id:req.user.id});
    // console.log(userContact)
    if(userContact){
      const userMessage=await userContact.addMessage(name,email,phone,message)
      await userContact.save();
      success=true;
      res.status(201).json({success,message:"User contacted successfully"});
    }else{
      success=false;
      res.status(400).json({success,message:"message not sent"});
    }
  }
  catch (error) {
    console.log(error);
    res.status(501).json({ message: 'Internal server error' })
  }
})


module.exports = router;