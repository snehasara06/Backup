const { application } = require('express');
var express = require('express');
var router = express.Router()


//  /p/
router.get('/user', (req, res) => {
   res.send('Get request for Users')
});
//  /p/get-product-details
router.get('/get-user-details',(req,res)=>{
   res.send("GET request for specific  products")
})

router.get('/create-user',(req,res)=>{
    res.send("List of users");
});
router.put("/update-user",(req,res)=>{
    res.send("List of users update");
});
router.get("/read-all-users",(req,res)=>{
    res.send("List of  all users");
});

router.get("/get-user-details",(req,res)=>{
    const userObj={
        id:10,
        name:"Sneha",
        lastname:"Saravanakumar",
        status:true
    }
    res.send(userObj);
});

router.delete('/delete-user',(req,res)=>{
    res.send("List of users-delete")
})







module.exports=router;