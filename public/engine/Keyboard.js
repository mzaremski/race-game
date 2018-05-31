"use strict";
// W - 87
// A - 65
// S - 83
// D - 68
const Keyboard = {
    pressed: {},
    onKeyDown: (e)=>{
        Keyboard.pressed["key_" + e.keyCode] = true;
    },
    onKeyUp: (e) => {
        Keyboard.pressed["key_" + e.keyCode] = false;
    },

}



module.exports = Keyboard;
