let num1 = document.querySelector("#num1");
let btVer = document.querySelector("#btVer");
let respo = document.querySelector("#resp");

function dias(){
    let nr1 = Number(num1.value);
    let anos = Math.floor(nr1 / 365);
    let outros = Math.floor((nr1 % 365) / 30);
    let dias = ((800 % 365) % 30);

    respo.textContent = (nr1 + "dias equivalem a" + anos + "anos" + outros + "meses e" + dias + "dias");
}

btVer.onclick = function(){
    dias();
}