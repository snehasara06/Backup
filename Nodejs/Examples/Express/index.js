const express=require('express');
const app=express();
// app.get('/read-users',(req,res)=>{
//     res.send("List of users")
// })
app.get("/getusers",(req,res)=>{
    res.send("Hello world!")
})
app.listen(4000);