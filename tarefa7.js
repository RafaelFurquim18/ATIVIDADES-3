let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let btVer = document.querySelector("#btVer");
let respo = document.querySelector("#resposta");

function ano(){
    let nr1 = Number(num1.value);
    let nr2 = Number(num2.value);
    if (nr1 < 1 || nr1 > 31 || nr2 < 1 || nr2 > 12) {
        resposta.textContent = "Por favor, insira valores válidos para dia e mês.";
        return;
    }

    let diasDoAno = (nr2 - 1) * 30 + nr1;
    resposta.textContent = "Ja se passaram " + diasDoAno + " dias desde o inicio do ano.";
}

btVer.onclick = function(){
    ano();
}