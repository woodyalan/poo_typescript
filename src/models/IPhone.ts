import { SistemasOperacionais } from "../enum/SistemasOperacionais";
import { IOS } from "./IOS";
import { Smartphone } from "./Smartphone";

export class IPhone extends Smartphone {
  constructor(
    marca: string,
    modelo: string,
    capacidadeMemoriaInterna: number,
    qualidadeCamera: number
  ) {
    const ios = new IOS(15);
    super(marca, modelo, capacidadeMemoriaInterna, qualidadeCamera, ios);
  }
}
