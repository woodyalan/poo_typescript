import { SistemasOperacionais } from "../enum/SistemasOperacionais";
import { Android } from "./Android";
import { Celular } from "./Celular";
import { SistemaOperacional } from "./SistemaOperacional";

export class Smartphone extends Celular {
  private _sistemaOperacional: SistemaOperacional;

  constructor(
    marca: string,
    modelo: string,
    capacidadeMemoriaInterna: number,
    qualidadeCamera: number,
    sistemaOperacional: SistemaOperacional
  ) {
    super(marca, modelo, capacidadeMemoriaInterna, qualidadeCamera);
    this._sistemaOperacional = sistemaOperacional;
  }

  public get sistemaOperacional(): SistemaOperacional {
    return this._sistemaOperacional;
  }
  public set sistemaOperacional(value: SistemaOperacional) {
    this._sistemaOperacional = value;
  }
}
