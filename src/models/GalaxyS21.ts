import { SistemasOperacionais } from "../enum/SistemasOperacionais";
import { Smartphone } from "./Smartphone";

export class GalaxyS21 extends Smartphone {
  private _versaoAndroid: number;

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
      SistemasOperacionais.ANDROID
    );
    this._versaoAndroid = 14;
  }

  public get versaoAndroid(): number {
    return this._versaoAndroid;
  }
}
