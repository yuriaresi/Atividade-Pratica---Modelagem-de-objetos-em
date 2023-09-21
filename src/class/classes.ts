export class Contador {
    private valor: number;



    constructor(valor: number) {
        this.valor = valor;
    }
    zerar() {
        this.valor = 0;
    }
    incrementar(valor: number) {
        this.valor += valor;
    }
    retornarValor() {
        return this.valor;
    }
}

export class Bola {
    cor: string;
    circunferência: number;
    material: string;

    constructor(cor: string, circunferência: number, material: string) {
        this.cor = cor;
        this.circunferência = circunferência;
        this.material = material;

    }
    alterarCor(cor: string) {
        this.cor = cor;
    }
    mostrarCor() {
        return this.cor
    }
}

export class ContaCorrente {
    numeroDaConta: number;
    nomeDoCorrentista: string;
    saldo: number;

    constructor(numeroDaConta: number, nomeDoCorrentista: string, saldo?: number) {
        this.numeroDaConta = numeroDaConta;
        this.nomeDoCorrentista = nomeDoCorrentista;
        this.saldo = saldo || 0;
    }
    alterarNome(nome: string) {
        this.nomeDoCorrentista = nome;

    }
    deposito(valor: number) {
        this.saldo += valor;
        console.log(`Deposito feito com sucesso, seu novo saldo é de R$: ${this.saldo}`)


    }
    saque(valor: number) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Saque realizado com sucesso, seu novo saldo é de R$: ${this.saldo}`)
        } else {
            console.log("Saldo insuficiente")
        }

    }
}

export class Calculadora {
    private historico: string[] = []
    constructor() { }

    registrarOperacao(historico: string): void {
        this.historico.push(historico);
    }



    somar(valor1: number, valor2: number) {
        const resultado = valor1 + valor2
        this.registrarOperacao(`Somando ${valor1} + ${valor2} = ${resultado}`)
        return resultado
    }
    subtrair(valor1: number, valor2: number) {
        const resultado = valor1 - valor2
        this.registrarOperacao(`Subtraindo ${valor1} - ${valor2} = ${resultado}`)
        return resultado
    }
    multiplicar(valor1: number, valor2: number) {
        const resultado = valor1 * valor2
        this.registrarOperacao(`Multiplicando ${valor1} * ${valor2} = ${resultado}`)
        return resultado
    }

    dividir(valor1: number, valor2: number) {
        const resultado = valor1 / valor2
        this.registrarOperacao(`Dividindo ${valor1} / ${valor2} = ${resultado}`)
        return resultado

    }

    visualizarHistorico(): string[] {
        return this.historico
    }

    limparHistorico() {
        this.historico = []
    }

}

export class BombaCombustivel {
    private tipoCombustivel: string;
    private valorLitro: number;
    private quantidadeCombustivel: number;

    constructor(tipoCombustivel: string, valorLitro: number, quantidadeCombustivel: number) {
        this.tipoCombustivel = tipoCombustivel;
        this.valorLitro = valorLitro;
        this.quantidadeCombustivel = quantidadeCombustivel;
    }

    abastecerPorValor(valor: number): number {
        if (valor <= 0) {
            console.log("Valor inválido. O valor deve ser maior que zero.");
            return 0;
        }

        const litrosAbastecidos = valor / this.valorLitro;

        if (litrosAbastecidos > this.quantidadeCombustivel) {
            console.log("Não há combustível suficiente na bomba.");
            return 0;
        }

        this.quantidadeCombustivel -= litrosAbastecidos;
        console.log(`Abastecidos ${litrosAbastecidos.toFixed(2)} litros de ${this.tipoCombustivel}.`);
        return litrosAbastecidos;
    }

    abastecerPorLitro(litros: number): number {
        if (litros <= 0) {
            console.log("Quantidade inválida. A quantidade deve ser maior que zero.");
            return 0;
        }

        const valorAPagar = litros * this.valorLitro;

        if (valorAPagar > this.quantidadeCombustivel) {
            console.log("Não há combustível suficiente na bomba.");
            return 0;
        }

        this.quantidadeCombustivel -= litros;
        console.log(`Valor a pagar: R$ ${valorAPagar.toFixed(2)}.`);
        return valorAPagar;
    }

    alterarValor(novoValor: number): void {
        if (novoValor <= 0) {
            console.log("Valor do litro inválido. Deve ser maior que zero.");
            return;
        }

        this.valorLitro = novoValor;
        console.log(`Valor do litro de ${this.tipoCombustivel} alterado para R$ ${novoValor.toFixed(2)}.`);
    }

    alterarCombustivel(novoTipo: string): void {
        this.tipoCombustivel = novoTipo;
        console.log(`Tipo de combustível alterado para ${novoTipo}.`);
    }

    alterarQuantidadeCombustivel(novaQuantidade: number): void {
        if (novaQuantidade < 0) {
            console.log("Quantidade de combustível inválida. Deve ser maior ou igual a zero.");
            return;
        }

        this.quantidadeCombustivel = novaQuantidade;
        console.log(`Quantidade de ${this.tipoCombustivel} na bomba alterada para ${novaQuantidade.toFixed(2)} litros.`);
    }
}

export class Carro {
    private consumoKmPorLitro: number;
    private nivelCombustivel: number;
  
    constructor(consumoKmPorLitro: number) {
      this.consumoKmPorLitro = consumoKmPorLitro;
      this.nivelCombustivel = 0;
    }
  
    adicionarGasolina(litros: number): void {
      if (litros <= 0) {
        console.log("Quantidade de combustível inválida. Deve ser maior que zero.");
      } else {
        this.nivelCombustivel += litros;
        console.log(`Abastecidos ${litros.toFixed(2)} litros de combustível.`);
      }
    }
  
    andar(distanciaKm: number): void {
      const combustivelNecessario = distanciaKm / this.consumoKmPorLitro;
      if (combustivelNecessario <= this.nivelCombustivel) {
        this.nivelCombustivel -= combustivelNecessario;
        console.log(`Carro andou ${distanciaKm.toFixed(2)} km.`);
      } else {
        console.log("O carro não tem combustível suficiente para percorrer essa distância.");
      }
    }
  
    obterGasolina(): number {
      return this.nivelCombustivel;
    }
  }







