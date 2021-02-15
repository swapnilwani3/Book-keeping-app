const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
require('./config/dbConnect')();

const app = express();
const PORT = process.env.PORT || 5000;

//passing body data
app.use(express.json())
//Routes
//User Routes

// Register
app.post('/api/users/register',async (req, res) =>{
    try {
        const {name,email,password} = req.body;
        const user = await User.create({name,email,password});
        console.log(user);
        res.send(user)
    } catch (error) {
        console.log(error)
    }
})

// Login user
app.post('/api/users/login',(req, res) =>{
    res.send('Login Routes')
})

// Update User
app.put('/api/users/update',(req, res) =>{
    res.send('update Routes')
})

// Delete User
app.delete('/api/users/:id',(req,res)=>{
    res.send('Delete Routes')
})

// Fetch user 
app.get('/api/users',(req,res)=>{
    res.send('Fetch users');
})



//server
app.listen(PORT,()=>{
    console.log(`Server is up and running ${PORT}`);
})


// Swap
// VdvpXYrRcWGfQlqb
// mongodb+srv://Swap:<password>@cluster0.mfdal.mongodb.net/test