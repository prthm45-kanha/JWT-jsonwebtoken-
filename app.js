const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
app.use(cookieParser());
const jwt=require('jsonwebtoken');

app.get('/',(req,res)=>{
    res.cookie("name","pratham guruji");
    res.send('done');
})

app.listen(3000,()=>{
    console.log("running");
})