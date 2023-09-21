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

