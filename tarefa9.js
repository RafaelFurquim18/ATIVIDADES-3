let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let num3 = document.querySelector("#num3");
let num4 = document.querySelector("#num4");
let btEnter = document.querySelector("#btEnter");
let respo = document.querySelector("#resposta");

function ponto(){
    let nr1 = Number(num1.value);
    let nr2 = Number(num2.value);
    let nr3 = Number(num3.value);
    let nr4 = Number(num4.value);
    let resp = Math.sqrt(((nr1 - nr2) ** 2)+ ((nr3 - nr4) ** 2));
    
    respo.textContent = resp.toFixed(2);

}

btEnter.onclick = function(){
    ponto();
}