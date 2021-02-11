// Using Joy for input Validation
const joi = require('joi');

const express = require('express');
const app = express();
const teammembers = [
    {id:1,name:'Akhteruzzaman'},
    {id:2,name:'Abdul Kayuem'},
    {id:3,name:'Emon'}

]

//
// exporting json, 
 app.use (express.json());


// get function has two arguments , first one is url , second one is endpoint
app.get('/h',(req,res)=>{
    res.send("What's up? ");
});


// api get req and send an array
app.get('/api/courses',(req,res)=>{
    res.send([1,2,3]);
})


// api get req and send back the given text as id
app.get('/api/courses/:id',(req,res) =>{
    res.send(req.params.id)
})


// api get req and send the given year and month
app.get('/api/posts/:year/:month',(req,res)=>{
    var details = "my name is emon"
    res.send(req.query);
})


// api get req and filter by id 
app.get('/api/androidteams/:id',(req,res)=>{
    const mem = teammembers.find( c => c.id === parseInt(req.params.id));
    if(!mem) res.status(404).send("The member is not available in Adnroid team");
    res.send(mem)
})


// api req and send the array
app.get('/api/androidteams/',(req,res)=>{
    
    res.send(teammembers)
})


// POST req , get a name and add it to database

app.post('/api/androidteams',(req,res)=>{
    if(!req.body.name || req.body.name.length <2){{
        // 400 Bad Request
        res.status(400).send('Name is Required and Should be minimum 3 Characters!');
        return;
    }}
    
    const members ={
        id: teammembers.length +1,
        name: req.body.name
    };
    teammembers.push(members);
    res.send(teammembers)
});


const port = process.env.port ||3000;
app.listen(3000,function(){
    console.log(`Server run success ${port}`);
});