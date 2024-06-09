let num1 = document.querySelector("#num1");
let btEnter = document.querySelector("#btEnter");
let respo = document.querySelector("#resposta");

function cavalo(){
    let nr1 = Number(num1.value);
    let resp = (nr1 * 4);

    respo.textContent = resp;

}

btEnter.onclick = function(){
    cavalo();
}