export class Animal {
  nome: string;
  cor: string;
  raca: string;
  peso: number;
  idade: number;
  dataNascimento: Date;

  constructor(
    nome: string,
    cor: string,
    raca: string,
    peso: number,
    idade?: number
  ) {
    this.nome = nome;
    this.cor = cor;
    this.raca = raca;
    this.peso = peso;
    this.dataNascimento = new Date();

    if (idade) {
      this.idade = idade;
    } else {
      this.idade = 0;
    }
  }

  emitirSom(som: string) {
    console.log(this.nome, "Emitindo som: " + som);
  }

  locomover(passos: number) {
    console.log(this.nome, "Locomovendo " + passos + " passos");
  }
}
