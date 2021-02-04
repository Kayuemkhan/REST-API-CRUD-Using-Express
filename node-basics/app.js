
// const logger= require('./logger')

// logger.log("message")

// const path = require('path')

// var pathObj = path.parse(__filename)

// console.log(pathObj)


// // Opearting System Data Fetch
// const os = require('os')
// var totalmemory = os.totalmem()
// var freememory = os.freemem()
// console.log(totalmemory)
// console.log(freememory)
// console.log(`Total Memory: ${os.totalmem}`)

// // Read the files in the folder 
// const fs = require('fs')

// // const files =  fs.readdirSync('./');

// // console.log(files)

// // current directory files 

// fs.readdir('./',function(err,files){
//     if(err) console.log("Error",err)
//     else console.log("result",files)
// })

// //Events 
// // This is an class, so it can tell which it do
// const EventEmitter = require('events')
// // this is an object, the actual istance 
// const emitter = new EventEmitter()
// //Register a listener
// emitter.on('messageLogged',function(arg){
//     console.log('listener Called',arg)
// })
// // // Raise Event
// // emitter.emit('messageLogged')
// // Emitter with some arguments
// emitter.emit('messageLogged', {id : 1, url:'http:..'})

//http 
const { Socket } = require('dgram');
const http = require('http');
const server = http.createServer( (req,res)=>{
    if(req.url  === '/'){
        res.write("What's up , Emon Brother... ");
        res.end();
    }
});
// server.on("connection", (socket) =>{
//     console.log("New Connection")
// })
server.listen(3000);

console.log("Listening on port 3000");
