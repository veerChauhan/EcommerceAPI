const express = require('express');

const dotenv = require('dotenv');
const app = express();
dotenv.config()

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('db connection successful');
}).catch((err) => {
    console.log(err);
})

// app.get('/api/test', () => {

//     console.log('Test api link is succesful');
// })

app.listen(process.env.PORT || 4000,()=> {
    console.log('server is up',app.PORT);
})