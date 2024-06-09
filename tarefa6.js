let num1 = document.querySelector("#num1");
let btEnter = document.querySelector("#btEnter");
let respo = document.querySelector("#resposta");

function kilos(){
    let nr1 = Number(num1.value);
    let resp = (nr1 * 12);

    respo.textContent = resp.toFixed(2) +  "Reais" ;
}

btEnter.onclick = function(){
    kilos();
}