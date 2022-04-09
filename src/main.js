"use strict"

import { sample } from "./canvas";
sample();


document.addEventListener('keypress', keypress_event);
document.addEventListener('keyup', keyup_event);

function keypress_event(e) {
    switch (e.code) {
        case "KeyJ":
            // right rotation
            break;
        case "KeyK":
            // left rotation
            break;
        case "KeyS":
            // start to move left
            break;
        case "KeyD":
            // start to move right
            console.log("D s");
            break;

    }
    return false;
}

function keyup_event(e) {
    switch (e.code) {
        case "KeyS":
            // finish to move left
            break;
        case "KeyD":
            // finish to move right
            console.log("D f");
            break;
    }
    return false;
}