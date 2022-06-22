const mongoose=require('mongoose');

var Flight=mongoose.model('Flight',{
    firstname:{type:String},
    lastname:{type:String},
    departure:{type:String},
    arrival:{type:String}
});
module.exports={Flight};