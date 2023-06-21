import { Animal } from "./Animal";

export class Ave extends Animal {
  aquatico: boolean;

  constructor(
    nome: string,
    cor: string,
    raca: string,
    peso: number,
    idade: number,
    aquatico: boolean
  ) {
    super(nome, cor, raca, peso, idade);
    this.aquatico = aquatico;
  }

  public botarOvo() {
    console.log(this.nome, "Botando ovo...");
  }
}
