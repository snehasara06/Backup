const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/Travel',(err)=>{
    if(!err)
    console.log("Connected successfully!!");
    else
    console.log("Error in Connection: "+JSON.stringify(err,undefined,2));

});
module.exports=mongoose;