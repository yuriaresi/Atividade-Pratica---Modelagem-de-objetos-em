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