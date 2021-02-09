var url = "http://mylogger.io/log"

function log(message){
    // Send an Http Req
    console.log(message)
}

module.exports.log = log; 
