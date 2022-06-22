var express = require('express');
var router = express.Router()

var mongoose=require('mongoose')
//  /p/
router.get('/', (req, res) => {
   // res.send('Get request for Products')
});
//  /p/get-product-details
router.get('/get-product-details',(req,res)=>{
   res.send("GET request for specific  products")
});
router.post('/create-product',(req,res)=>{
   res.send("List of products");
});
router.put('/update-product',(req,res)=>{
   
})
module.exports=router;