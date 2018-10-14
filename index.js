'use strict';

let http = require('http');
let express = require('express');
let socketio = require('socket.io');

let app = express();
let server = http.createServer(app)
let io = socketio(server)

let Engine = require("./engine/engine.js")
Engine.init(io);

server.listen(8000, function(){
    console.log("Ready on port: 8000")
})
