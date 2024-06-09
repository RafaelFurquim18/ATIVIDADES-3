let num1 = document.querySelector("#num1");
let btVer = document.querySelector("#btVer");
let respo1 = document.querySelector("#resposta1");
let respo2 = document.querySelector("#resposta2");
let respo3 = document.querySelector("#resposta3");

function aumento(){
    let nr1 = Number(num1.value);
    let resp1 = (nr1 * 1);
    let resp2 = ((nr1 * 0.15) + resp1);
    let resp3 = ( resp2 - (resp2 * 0.08));

    respo1.textContent = resp1.toFixed(2);
    respo2.textContent = resp2.toFixed(2);
    respo3.textContent = resp3.toFixed(2);

}

btVer.onclick = function(){
    aumento();
}