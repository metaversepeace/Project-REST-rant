//Require epress to start using it.
const express = require('express');

//Initializing the express app.
const app = express();

//Making the homepage route
app.get('/',(req,res) => {
    console.log('We did it!')
    res.send('HOMEPAGE')
});

//Opening the server to listen for connections
server.listen(3000);
/*    
let http = require('http')
let server = http.createServer(function(req, res) {
    res.write('Welcome to Rest-Rant!')
    res.end()
})

server.listen(3000, function(){
console.log('This port works')
})
*/


