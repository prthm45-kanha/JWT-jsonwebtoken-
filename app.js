const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
app.use(cookieParser());
const jwt=require('jsonwebtoken');

// Sending JWT to Client:
app.get('/',(req,res)=>{
    let tokenn = jwt.sign({email:"pratham@gmail.com"},"secret");
    res.cookie("token",tokenn);
    res.send("donee");
    console.log(tokenn);

})

// set up the cookie
// app.get('/',(req,res)=>{
//     res.cookie("name","pratham guruji");
//     res.send('done');
// })

app.listen(3000,()=>{
    console.log("running");
})