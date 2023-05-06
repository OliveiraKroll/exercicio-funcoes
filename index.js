//Enunciado 
// Exercicio interpretação

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// import { outraFuncao } from "./buscaPalavra.js";

// let textoDoUsuario = prompt("Insira um texto")



// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)



//1
// const nome = prompt("Digite seu nome")
// const idade = Number(prompt("Digite sua idade"))
// const cidade = prompt("Digite sua cidade")
// const profissao = prompt("Digite sua profissão")

// function listarPessoa(nomePessoa,idadePessoa,cidadePessoa,profissaoPessoa){
// console.log (`Eu sou ${nome} tenho ${idadePessoa} anos, moro em ${cidadePessoa} e sou ${profissaoPessoa}.`)

// }


// listarPessoa(nome,idade,cidade,profissao)


//2
// function somar(n1,n2){

//     return n1 + n2
// }

// function maiorQue(n1,n2){
//     return n1 >= n2

// }

// function ehPar(n1,n2){

//     return n1 % n2 === 0;
// }

// console.log(somar(10,20));
// console.log(maiorQue(10,20));
// console.log(ehPar(10,20));



//3

const n1 = prompt("Insira um numero")
const n2 = prompt ("Insira outro numero")

function somar(n1,n2){
return n1 + n2
}

function subtrair (n1,n2){
return n1 - n2

}

function multiplicar (n1,n2){
    return n1 * n2
}

function dividir (n1,n2){

    return n1 / n2
}

console.log(somar(n1,n2))
console.log(subtrair(n1,n2))
console.log(multiplicar(n1,n2))
console.log(dividir(n1,n2))

