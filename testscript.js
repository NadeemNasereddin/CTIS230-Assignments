myitem = document.getElementById("firsttest");

myitem.addEventListener("click", onClick);

function onClick() {  
    myitem.style.color = "green";  
}

myitem.addEventListener("mouseout", onMouseOut)
function onMouseOut() {
    myitem.style.color = "";
}



thebutton = document.getElementById("thebutton");
otheritem = document.getElementById("buttontest");

thebutton.addEventListener("click", onButtonClick);

function onButtonClick() {  
    otheritem.style.color = "red";  
}


let textentry = document .getElementById("myinput"); 
textentry. addEventListener("change", onchange);

function onChange() {
    let newtext = myinput. value;
    otheritem.innerHTML = newtext;
}