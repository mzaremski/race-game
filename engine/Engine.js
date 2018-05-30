let onConnection = require('./onConnection.js')

const Engine = {
    init(io){
        io.on('connection', onConnection);
    }
}

module.exports = Engine
