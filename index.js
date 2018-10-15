'use strict';

let http = require('http');
let express = require('express');
let socketio = require('socket.io');

let app = express();
let server = http.createServer(app)
let io = socketio(server)

app.get('/', (req, res) => res.send(`Hello! Welcome on server of excellent game made by <a href="https://marcinzaremski.pl/">Marcin Zaremski</a>`))

let Engine = require("./engine/Engine.js")
Engine.init(io);

const port = process.env.PORT || 5000
server.listen(port, function(){
    console.log("Ready on port: " + port)
})
