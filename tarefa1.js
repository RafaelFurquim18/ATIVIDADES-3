let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let btValidar = document.querySelector("#btValidar");
let respo = document.querySelector("#resposta");

function terreno(){
    let nr1 = Number(num1.value);
    let nr2 = Number(num2.value);
    let resp = (nr1 * nr2);

    respo.textContent = resp;
}

btValidar.onclick = function(){
    terreno();
}