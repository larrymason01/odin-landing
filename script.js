var textPosition = 0; 
var messageArray = ["This website is crazy."];
var speed = 100;

typewriter = () => {
    document.querySelector("#message").innerHTML = messageArray[0].substring(0,textPosition);

    if(textPosition++ != messageArray[0].length) {
        setTimeout(typewriter, speed);
    }
}

window.addEventListener("load", typewriter);