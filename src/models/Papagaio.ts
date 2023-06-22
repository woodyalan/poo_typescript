import { Ave } from "./Ave";

export class Papagaio extends Ave {
  emitirSom(som: string): void {
    console.log(this.nome, "Repetindo: " + som);
  }

  locomover(distanciaEmMetros: number): number {
    console.log(this.nome, "Voando..." + distanciaEmMetros + " metros");
    return distanciaEmMetros;
  }
}
