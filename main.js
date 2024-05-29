document.querySelector('.parametro-senha__botao');
const numeroSenha = document.querySelector('.parametro-senha__texto');
numeroSenha.textContent = 5;
let tamanhoSenha = 12;
const botoes = document.querySelector('.parametro-senha__botao');
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;
const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVXYWZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvxywz";
const numeros = "0123456789";
const simbolos = "!@%*?";
const botoes = document.querySelectorAll(".parametro-senha__botao");
const campoSenha = document.querySelector("#campo-senha");
const checkbox = document.querySelectorAll(".checkbox");
function geraSenha(){

    let alfabeto = "";
    if (checkbox[0].checked){
        alfabeto = alfabeto + letrasMaiusculas;
        }
        if (checkbox[1].checked){
            alfabeto = alfabeto + letrasMinusculas;
            }
            if (checkbox[2].checked){
            alfabeto = alfabeto + numeros;
            }
            if (checkbox[3].checked){
            alfabeto = alfabeto + simbolos;
            }
        }
        console.log(alfabeto);
        let senha= ""
    for (let i = 0; i < tamanhoSenha;i++) {
    let numeroAleatorio = Math.random()*letrasMaiusculas.length;
    numeroAleatorio = Math.floor(numeroAleatorio);
    senha = senha + letrasMaiusculas[numeroAleatorio];
    console.log(letrasMaiusculas[numeroAleatorio]);
}
campoSenha.value = senha;
classificaSenha();{
function classificaSenha(){
    forcaSenha.classList.remove("fraca,"media","forte");
    if (tamanhoSenha > 11){
    forcaSenha.classList.add("forte")
} else  if (tamanhoSenha > 5 && tamanhoSenha < 12){
    forcaSenha.classList.add("media");
} else if (tamanhoSenha < 6){
forcaSenha.classList.add("fraca");
    }
}
const checkbox = document.querySelectorAll(".checkbox");
for (i=0; i < checkbox.length;i++){
console.log(checkbox[i].checked);

function diminuiTamanho(){
    if (tamanhoSenha > 1)
    tamanhoSenha = tamanhoSenha - 1;
    numeroSenha.textContent = tamanhoSenha
    geraSenha();
}
function aumentaTamanho() {
    if (tamanhoSenha < 20) {
    tamanhoSenha = tamanhoSenha + 1;
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
    const forcaSenha = document.querySelector(".forca");
    }
}

