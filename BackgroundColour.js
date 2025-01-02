var rr = 0;
var gg = 0;
var bb = 0;

function incrementRed(){
    if(rr>=0 && rr<255){
        rr++;
        document.getElementById("result1").value = rr;
    }
    backgroundColor();
}
function decrementRed(){
    if(rr>=1 && rr<=255){
        rr--;
        document.getElementById("result1").value = rr;
    }
    backgroundColor();
}

function incrementGreen(){
    if(gg>=0 && gg<255){
        gg++;
        document.getElementById("result2").value = gg;
    }
    backgroundColor();
}
function decrementGreen(){
    if(gg>=1 && gg<=255){
        gg--;
        document.getElementById("result2").value = gg;
    }
    backgroundColor();
}

function incrementBlue(){
    if(bb>=0 && bb<255){
        bb++;
        document.getElementById("result3").value = bb;
    }
    backgroundColor();
}
function decrementBlue(){
    if(bb>=1 && bb<=255){
        bb--;
        document.getElementById("result3").value = bb;
    }
    backgroundColor();
}

var red = document.querySelector("#result1");
var green = document.querySelector("#result2");
var blue = document.querySelector("#result3");

function backgroundColor(){
    var rr = red.value;
    var gg = green.value;
    var bb = blue.value;
    
    document.body.style.backgroundColor = `rgb(${rr},${gg},${bb})`;
}
