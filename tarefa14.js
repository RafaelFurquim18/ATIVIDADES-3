let num1 = document.querySelector("#num1");
let btVer = document.querySelector("#btVer");
let respo1 = document.querySelector("#resposta1");
let respo2 = document.querySelector("#resposta2");
let respo3 = document.querySelector("#resposta3");

function conta(){
    let nr1 = Number(num1.value);
            let resp1 = Math.floor(nr1 / 3);
            let resp2 = Math.floor(nr1 / 3);
            let resp3 = nr1 - resp1 * 2 - resp2 * 2;

    respo1.textContent = resp1.toFixed(2) + "Cralos Pagara";
    respo2.textContent = resp2.toFixed(2) + "Andre Pagara";
    respo3.textContent = resp3.toFixed(2) + "Felipe Pagara";
    
}

btVer.onclick = function(){
    conta();
}