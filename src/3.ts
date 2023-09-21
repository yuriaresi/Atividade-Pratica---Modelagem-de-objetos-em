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

console.log(yuri.nomeDoCorrentista)

yuri.alterarNome("Yuri Aresi")

console.log(yuri.nomeDoCorrentista)

yuri.deposito(10000)

yuri.saque(5000)

console.log(yuri.saldo)