let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let num3 = document.querySelector("#num3");
let btEnter = document.querySelector("#btEnter");
let respo1 = document.querySelector("#resposta1");
let respo2 = document.querySelector("#resposta2");
let respo3 = document.querySelector("#resposta3");

function loja(){
    let nr1 = Number(num1.value);
    let nr2 = Number(num2.value);
    let nr3 = Number(num3.value);
    let resp1 = (nr1 * 10);
    let resp2 = (nr2 * 12);
    let resp3 = (nr3 * 15);

    respo1.textContent = resp1.toFixed(2);
    respo2.textContent = resp2.toFixed(2);
    respo3.textContent = resp3.toFixed(2);
}

btEnter.onclick = function(){
    loja();
}