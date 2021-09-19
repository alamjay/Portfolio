let i=0;
var speed=50;
var element = document.getElementById('myname');
document.getElementById("myname").innerHTML = "";

console.log(element.textContent)

window.onload = runTypeWriter(typeRole);

function runTypeWriter(callback) {
    typeWriter(element, element.textContent);
    // callback();
}

function typeRole(){
    i=0;
    // typeWriter(document.getElementById('myrole'));
}

function typeWriter(htmlElement, text) {
    console.log(text.length);

    if(i<text.length) {
        htmlElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter(htmlElement, text), speed);        
    }
}