const express = require('express');
const app = express();
// get function has two arguments , first one is url , second one is endpoint
app.get('/hellomessage',(req,res)=>{
    res.send("hello world");
});
app.get('/api/courses',(req,res)=>{
    res.send([1,2,3]);
})
app.listen(3000,function(){
    console.log("Server run success");
});