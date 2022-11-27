const express=require('express');
const app=express();

app.post('/user',(req,res)=>{
    console.log("get request received");
    res.send("Hi there")
})

app.listen(3006,()=>{
    console.log("port ruunning at 3006")
})