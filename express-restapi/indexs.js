const express = require('express');
const app = express();
const teammembers = [
    {id:1,name:'Akhteruzzaman'},
    {id:2,name:'Abdul Kayuem'},
    {id:3,name:'Emon'}

]
// get function has two arguments , first one is url , second one is endpoint
app.get('/h',(req,res)=>{
    res.send("What's up? ");
});
app.get('/api/courses',(req,res)=>{
    res.send([1,2,3]);
})
app.get('/api/courses/:id',(req,res) =>{
    res.send(req.params.id)
})


app.get('/api/posts/:year/:month',(req,res)=>{
    var details = "my name is emon"
    res.send(req.query);
})
app.get('/api/androidteams/:id',(req,res)=>{
    const mem = teammembers.find( c => c.id === parseInt(req.params.id));
    if(!mem) res.status(404).send("The member is not available in Adnroid team");
    res.send(mem)
})
app.get('/api/androidteams/',(req,res)=>{
    
    res.send(teammembers)
})


const port = process.env.port ||3000;
app.listen(3000,function(){
    console.log(`Server run success ${port}`);
});