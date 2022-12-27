const mongoose=require('mongoose');
const shortId=require('shortid');
// shortId.generate();
const shortUrlschema=new mongoose.Schema({
     full:{
          type:String,
          required:true
     },
     short:{
          type:String,
          required:true,
          default:shortId.generate
     },
     clicks:{
         type:String,
         required:true,
         default:0 
     }
})
module.exports=mongoose.model('ShortUrl',shortUrlschema)
