let str = document.getElementById("evaluatedText");

let mess = document.getElementById("letterCount");

function check(){
    let val = str.value;
    let valLength = val.length;
    mess.innerHTML = valLength; 
}

str.addEventListener("keyup",check);