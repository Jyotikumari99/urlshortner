const express=require('express');
const mongoose=require('mongoose');
const app=express();
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/Url', {
  useNewUrlParser: true, useUnifiedTopology: true
})
app.set('view engine','ejs');

app.get('/',(req,res)=>{
   res.render('index');
})
app.post('/shortUrls',(req,res)=>{

})
app.listen(process.env.PORT||5000);
