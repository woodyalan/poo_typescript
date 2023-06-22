import { SistemasOperacionais } from "../enum/SistemasOperacionais";
import { Celular } from "./Celular";

export class Smartphone extends Celular {
  private _sistemaOperacional: string;

  constructor(
    marca: string,
    modelo: string,
    capacidadeMemoriaInterna: number,
    qualidadeCamera: number,
    sistemaOperacional: SistemasOperacionais
  ) {
    super(marca, modelo, capacidadeMemoriaInterna, qualidadeCamera);
    this._sistemaOperacional = sistemaOperacional;
  }

  public get sistemaOperacional(): string {
    return this._sistemaOperacional;
  }
  public set sistemaOperacional(value: string) {
    this._sistemaOperacional = value;
  }
}
