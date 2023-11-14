
"use strict";

const ul = document.getElementById("meineUL");


function addElement()
{
    const li = document.createElement("li");
    const text2 = document.getElementById("text").value;
    li.innerHTML = text2;
    ul.appendChild(li);
}
