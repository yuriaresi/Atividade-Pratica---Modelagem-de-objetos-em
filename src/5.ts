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

import { BombaCombustivel } from "./class/classes";

const bombaGasolina = new BombaCombustivel("Gasolina", 5.0, 100);
console.log("Quantidade de gasolina na bomba:", bombaGasolina.abastecerPorValor(30));
console.log("Valor a pagar pelo cliente:", bombaGasolina.abastecerPorLitro(8));
bombaGasolina.alterarValor(5.5);
bombaGasolina.alterarCombustivel("Álcool");
bombaGasolina.alterarQuantidadeCombustivel(150);