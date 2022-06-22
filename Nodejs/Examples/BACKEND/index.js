const express=require('express');
const bodyParser=require('body-parser');


const mongoose=require('../BACKEND/db.js');

// const { application } = require('express');
var flightController=require('./Controllers/flightController.js')
const app=express();

app.use(bodyParser.json());

app.listen(3000,()=>{
    console.log('Server  started at port :3000')
});

app.use('/flightData',flightController);