let num1 = document.querySelector("#num1");
let btValidar = document.querySelector("#btValidar");
let respo1 = document.querySelector("#resposta1");
let respo2 = document.querySelector("#resposta2");
let respo3 = document.querySelector("#resposta3");

function uni(){
    let nr1 = Number(num1.value);
    let resp1 = Math.floor(nr1 / 100);
    let resp2 = Math.floor((nr1 % 100) / 10);
    let resp3 = nr1 % 10;

    respo1.textContent = resp1.toFixed(2) + "Centena";
    respo2.textContent = resp2.toFixed(2) + "Dezena";
    respo3.textContent = resp3.toFixed(2) + "Unidade";

}

btValidar.onclick = function(){
    uni();
}