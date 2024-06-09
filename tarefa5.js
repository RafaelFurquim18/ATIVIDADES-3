let num1 = document.querySelector("#num1");
let btValidar = document.querySelector("#btValidar");
let respo = document.querySelector("#resposta");

function gasolina(){
    let nr1 = Number(num1.value);
    let resp = (nr1 * 5.60);

    respo.textContent = resp.toFixed(2) + "Reais";

}

btValidar.onclick = function(){
    gasolina();
}