import { Ave } from "./Ave";

export class Papagaio extends Ave {
  public repetir(som: string) {
    console.log(this.nome, "Repetindo: " + som);
  }
}
