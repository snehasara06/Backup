var express = require('express');
var router = express.Router()

router.use('/',(req,res,next)=>{
    req.headers["content-type"]='application/json';
    console.log("API call received");
    next();

});

router.get('/',(req,res,next)=>{
    res.send("Headers received"+ req.headers["content-type"]);
    res.send("Get request for users");
    next();
});
//  /p/
// router.get('/users', (req, res) => {
//    res.send('Get request for Users')
// });
//  /p/get-product-details
// router.get('/get-user-details',(req,res)=>{
//    res.send("GET request for specific  user")
// })
// module.exports=router;