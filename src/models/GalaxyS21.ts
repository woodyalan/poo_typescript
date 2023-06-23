import { SistemasOperacionais } from "../enum/SistemasOperacionais";
import { Android } from "./Android";
import { Smartphone } from "./Smartphone";

export class GalaxyS21 extends Smartphone {
  constructor(
    marca: string,
    modelo: string,
    capacidadeMemoriaInterna: number,
    qualidadeCamera: number
  ) {
    const os = new Android(14);

    super(marca, modelo, capacidadeMemoriaInterna, qualidadeCamera, os);
  }
}
