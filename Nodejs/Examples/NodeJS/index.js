var express = require("express");
var app = express();

var mongoose=require("mongoose");


var products = require('../routes/products');
app.use('/products',products);

var users=require('../routes/users');
app.use('/users',users);




app.listen(4000);