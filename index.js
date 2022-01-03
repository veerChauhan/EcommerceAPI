const express = require('express');

// env file for constants
const dotenv = require('dotenv');

//user router
const userRouter = require('./routes/user')

//create express application
const app = express();

//config dotenv file to use in app
dotenv.config()

//DB connection
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('db connection successful');
}).catch((err) => {
    console.log(err);
})

//ROuter adding
app.use('/api/user', userRouter)

//Server 
app.listen(process.env.PORT || 4000,()=> {
    console.log('server is up');
})