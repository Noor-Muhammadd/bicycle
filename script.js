alert("Click on the bell(at the right handle) and the head lights! You can also change the speed of the bicycle using the slider at the top right corner!")
window.onload = function() {
    var wheelb = document.getElementById("wheelb");
    var wheelf = document.getElementById("wheelf");
    var paddlec = document.getElementById("paddlec");
    for (let i = 0; i < 180; i+=30){wheelb.innerHTML += "<div class = 'line' style = 'transform:rotate("+i+"deg)'></div>";}
    wheelf.innerHTML += wheelb.innerHTML;
    for (let i = 0; i < 360; i+=60){paddlec.innerHTML += "<div style = 'position:absolute;top:0;left:48%;height:100%;width:4%;border-radius:50%;background:linear-gradient(180deg, rgba(0, 0, 0, 0.01) 20%, #da5 20%, #da5 25%, rgba(0, 0, 0, 0.01) 25%);transform:rotate("+i+"deg)'></div>";}
    paddlec.innerHTML += "<div style = 'position: absolute;top: 37%; left: 37%;height: 20%;width: 20%;border-radius: 50%; background: #fcc;border: 2px dotted black;'>";
    document.getElementById("bell").preload = "auto";
};
var t = setInterval(func, 10);
function func() {
    var slider = document.getElementById("range");
    for (let i = 1; i < 13; i++){
        document.getElementsByClassName("animate"+i)[0].style.animationDuration = ((100 - slider.value)/30+0.5)+"s";
    }
    for (let i = 1; i < 4; i++){
        document.getElementById("grass"+i).style.animationDuration = ((100 - slider.value)/20+0.9)+"s";
    }
}
function sound() {
    var bell = document.getElementById("bell");
    bell.currentTime = 0;
    bell.play();
}


var c = 0;
function light() {
    var extras9 = document.getElementById("extras9");
    var extras10 = document.getElementById("extras10");
    c++;
    if (c%2) {
        extras9.style.background = "#aa1";
        extras10.style.display = "none";
        extras9.style.borderRight = "10px solid #aaa";
    }
    else {
        extras9.style.background = "#ff3";
        extras10.style.display = "block";
        extras9.style.borderRight = "10px solid #eee";
    }
}
