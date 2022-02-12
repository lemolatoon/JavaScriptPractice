"use strict"
document.addEventListener('keypress', keypress_event);

function keypress_event(e) {
    alert(e.key);
    return false;
}