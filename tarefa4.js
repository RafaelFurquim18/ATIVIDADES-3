let nome = document.querySelector("#nome");
let idade = document.querySelector("#idade");
let btEnter = document.querySelector("#btEnter");
let respo = document.querySelector("#resposta");

function ano(){
    let nr1 = String(nome.value);
    let nr2 = parseInt(idade.value);

    let diasDeVida = nr2 * 365;

    respo.textContent = nr1 + ", voce ja viveu " + diasDeVida + " dias.";
}

btEnter.onclick = function(){
    ano();
};