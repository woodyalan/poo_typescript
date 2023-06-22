import { SistemasOperacionais } from "../enum/SistemasOperacionais";
import { Smartphone } from "./Smartphone";

export class IPhone extends Smartphone {
  private _versaoIOS: number;

  constructor(
    marca: string,
    modelo: string,
    capacidadeMemoriaInterna: number,
    qualidadeCamera: number
  ) {
    super(
      marca,
      modelo,
      capacidadeMemoriaInterna,
      qualidadeCamera,
      SistemasOperacionais.IOS
    );
    this._versaoIOS = 15;
  }

  public get versaoIOS(): number {
    return this._versaoIOS;
  }
}
