let pressKeyDiv = document.getElementById('presskey');
let containerDiv = document.getElementById('container');
let eventKeyDiv = document.getElementById('eventkey');
let eventKeyCodeDiv = document.getElementById('eventkeycode');
let eventCodeDiv = document.getElementById('eventcode');
pressKeyDiv.style.display = "block"

document.onkeydown = function(event){
    if (pressKeyDiv.style.display == "block"){
        pressKeyDiv.style.display = "none";
        containerDiv.style.display = "flex"
    }
    eventKeyDiv.innerText = event.key == " " ? "Space": event.key;
    eventKeyCodeDiv.innerText = event.keyCode;
    eventCodeDiv.innerText = event.code;
}