"use strict";
function error() {
    if (Math.random()*10 - 0.5 < 5) {
        throw new Error("Fehler");
    }
    else{
        return("Erfolg!");
    }
}


