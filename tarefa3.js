let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let btVer = document.querySelector("#btVer");
let resposta1 = document.querySelector("#resp1");
let resposta2 = document.querySelector("#resp2");

function pao(){
    let nr1 = Number(num1.value);
    let nr2 = Number(num2.value);
    let resp1 = ((nr1 * 0.12) + (nr2 * 1.50));
    let resp2 = (resp1 * 0.10);

    resposta1.textContent = resp1.toFixed(2);
    resposta2.textContent = resp2.toFixed(2);
}

btVer.onclick = function(){
    pao();
}