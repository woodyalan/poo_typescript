import { Animal } from "./Animal";

export class Peixe extends Animal {
  temEscamas: boolean;
  quantidadeDeNadadeiras: number;

  constructor(
    nome: string,
    cor: string,
    raca: string,
    peso: number,
    idade: number,
    temEscamas: boolean,
    quantidadeDeNadadeiras: number
  ) {
    super(nome, cor, raca, peso, idade);
    this.temEscamas = temEscamas;
    this.quantidadeDeNadadeiras = quantidadeDeNadadeiras;
  }

  nadar() {
    console.log(this.nome, "O peixe está nadando");
  }

  respirarDebaixoDAgua() {
    console.log(this.nome, "O peixe está respirando debaixo d'água");
  }
}
