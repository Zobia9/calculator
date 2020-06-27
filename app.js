

function getNumber(num){
    var end = document.getElementById("end");

    end.value += num;
}

function clearEnd(){
    var end = document.getElementById("end");
    end.value = ""
}

function getEnd(){
    var end = document.getElementById("end");
    end.value = eval(end.value) 
}

