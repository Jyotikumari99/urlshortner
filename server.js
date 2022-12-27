const express=require('express');
const mongoose=require('mongoose');
const ShortUrl=require('./models/shortUrl')
const app=express();
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/Url', {
  useNewUrlParser: true, useUnifiedTopology: true
})
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}))/*either can be true or false*/
app.get('/',async(req,res)=>{
    const shortUrls=await ShortUrl.find();                   /*code to show shorten url here show all the shorten url in the table*/
   res.render('index',{shortUrls:shortUrls});
})
app.post('/shortUrls',async(req,res)=>{
  await ShortUrl.create({full:req.body.fullUrl})/*for accessing the form use name same as form anme */
  res.redirect('/')/*redirecting to home page*/
})
app.listen(process.env.PORT||5000);
