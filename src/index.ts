// 1. Crie uma classe Contador, que encapsule um valor usado para
// contagem de itens ou eventos. A classe deve oferecer métodos que
// devem:
// a) Zerar;
// b) Incrementar;
// c) Retornar o valor do contador.
console.log("------------------------------------------- Atividade 1")

import { Contador } from "./class/classes";

const valor = new Contador(100)

console.log(valor)

valor.zerar()

console.log(valor)

valor.incrementar(10)

console.log(valor)

valor.incrementar(100)

console.log(valor)

console.log(valor.retornarValor())




console.log("------------------------------------------- Atividade 2")

// 2. Crie uma classe que modele uma bola:
// a. Atributos
// i. Cor
// ii. Circunferência
// iii. Material
// b. Métodos
// i. Trocar Cor
// ii. Mostrar cor


import { Bola } from "./class/classes";

const bola = new Bola("Azul", 10, "Plastico");

console.log(bola.mostrarCor());

bola.alterarCor("vermelho")

console.log(bola.mostrarCor());

console.log("------------------------------------------- Atividade 3")

// 3. Crie uma classe para implementar uma conta corrente. A classe
// deve possuir os seguintes atributos:
// a. Número da conta
// b. Nome do correntista
// c. Saldo
// Os métodos são os seguintes:
// a) Alterar nome
// b) Deposito
// c) Saque
// No construtor, o saldo é opcional, com valor padrão zero e os
// demais atributos são obrigatórios. A conta não pode ficar com saldo
// negativo.
import { ContaCorrente } from "./class/classes";

const yuri = new ContaCorrente(1234, "Yuri");

console.log(yuri)

yuri.alterarNome("Yuri Aresi")

console.log(yuri)

yuri.deposito(10000)

yuri.saque(5000)

console.log(yuri.saldo)




console.log("------------------------------------------- Atividade 4")

// 4. Crie uma classe para representar uma Calculadora. Esta classe
// deve conter um atributo que servirá para armazenar o histórico das
// operações e seus respectivos resultados.
// a. Esta classe deve conter as operações de somar, multiplicar,
// dividir e diminuir.
// b. Esta classe deve iniciar com o histórico vazio
// c. Esta classe deve conter uma ação para visualizar o histórico.

import { Calculadora } from "./class/classes";

const calculadora = new Calculadora();
console.log(calculadora)

calculadora.somar(10, 20)

calculadora.dividir(50, 5)

calculadora.multiplicar(10, 10)

calculadora.subtrair(100, 10)


console.log(calculadora.visualizarHistorico())
console.log("-------------------")
calculadora.limparHistorico()
console.log(calculadora.visualizarHistorico())





console.log("------------------------------------------- Atividade 5")
// 5. Faça um programa completo utilizando classes e métodos que:
// a. Possua uma classe chamada BombaCombustivel, com no
// mínimo esses atributos:
// i. tipoCombustivel.
// ii. valorLitro

// iii. quantidadeCombustivel
// b. Possua no mínimo esses métodos:
// i. abastecerPorValor() – método onde é informado o
// valor a ser abastecido e mostra a quantidade de litros
// que foi colocada no veículo
// ii. abastecerPorLitro() – método onde é informado a
// quantidade em litros de combustível e mostra o valor a
// ser pago pelo cliente.
// iii. alterarValor() – altera o valor do litro do combustível.
// iv. alterarCombustivel() – altera o tipo do combustível.
// v. alterarQuantidadeCombustivel() – altera a
// quantidade de combustível restante na bomba.

// OBS: Sempre que acontecer um abastecimento é necessário
// atualizar a quantidade de combustível total na bomba. Não deve ser
// possível abastecer se não tiver gasolina suficiente na bomba.


console.log("------------------------------------------- Atividade 6")
