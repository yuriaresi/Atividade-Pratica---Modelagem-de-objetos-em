// 1. Crie uma classe Contador, que encapsule um valor usado para
// contagem de itens ou eventos. A classe deve oferecer métodos que
// devem:
// a) Zerar;
// b) Incrementar;
// c) Retornar o valor do contador.

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

