"use strict";
const chalk = require('chalk');

const Control = require('./Control')
const Player = require('./Player')



const performanceTest = {
    controlModule(){
        const player = new Player("testOptimization", {}, 0)
        const keyboardData = {
            key_87: false,
            key_32: false,
            key_65: false,
            key_83: false,
            key_68: false
        }

        const timeStart = process.hrtime();
        for(let i in keyboardData){
            i = true;
            for(let k = 10; k>0;k--){
                Control.computePosition(player, keyboardData)
            }
            i = false;
        }
        const timeEnd = process.hrtime()
        const executeTime = parseHrToMS(timeEnd) - parseHrToMS(timeStart)//in ms

        console.log(getInfoOfExecute("CONTROLMODULE", executeTime, 0.9))
    },
    everything(){
        performanceTest.controlModule()
    }
}



function getInfoOfExecute(name, executeTime, goodTime){
    return chalk[executeTime > goodTime ? "bgRed" : "bgGreen" ].black("Time execution of:", chalk.bold.white(name) , executeTime , " ms ", " Good time is less than: " + goodTime + "ms ")
}



function parseHrToMS(hrtime) {
    return (hrtime[0] * 1e9) + hrtime[1] / 1e6;
}



performanceTest.everything()
module.exports = performanceTest
