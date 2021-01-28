const express = require('express')

const connectDB = require('./config/connectDB')

const app = express ();

connectDB();

const port = process.env.PORT || 3500;

app.listen(port, (err)=>{
    err
        ?console.log(err)
        :console.log('Server running', port)
});