//your code here
let str = document.getElementById("evaluatedText");

let mess = document.getElementById("letterCount");

function check(){
    let val = str.value;
    let valLength = val.length+1;
    mess.innerHTML = valLength; 
}

str.addEventListener("keypress",check);