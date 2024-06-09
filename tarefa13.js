let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let btEnter = document.querySelector("#btEnter");
let respo1 = document.querySelector("#resposta1");

function funcao(){
    let nr1 = Number(num1.value);
    let nr2 = Number(num2.value);
    let resp1 = ((nr1 * nr2) ** 2 );

    respo1.textContent = resp1.toFixed(2);
}

btEnter.onclick = function(){
    funcao();
}