import { Aplicativo } from "./Aplicativo";

export class Celular {
  private _marca: string;
  private _modelo: string;
  private _capacidadeMemoriaInterna: number;
  private _qualidadeCamera: number;
  private _nivelBateria: number;
  private _ligado: boolean;
  private _dataFabricacao: Date;
  private _aplicativos: Aplicativo[];

  constructor(
    marca: string,
    modelo: string,
    capacidadeMemoriaInterna: number,
    qualidadeCamera: number
  ) {
    this._marca = marca;
    this._modelo = modelo;
    this._capacidadeMemoriaInterna = capacidadeMemoriaInterna;
    this._qualidadeCamera = qualidadeCamera;
    this._nivelBateria = 100;
    this._ligado = false;
    this._aplicativos = [];
    this._dataFabricacao = new Date();
  }

  public get marca(): string {
    return this._marca;
  }

  public set marca(value: string) {
    this._marca = value;
  }

  public get modelo(): string {
    return this._modelo;
  }

  public set modelo(value: string) {
    this._modelo = value;
  }

  public get capacidadeMemoriaInterna(): number {
    return this._capacidadeMemoriaInterna;
  }

  public set capacidadeMemoriaInterna(value: number) {
    this._capacidadeMemoriaInterna = value;
  }

  public get qualidadeCamera(): number {
    return this._qualidadeCamera;
  }

  public set qualidadeCamera(value: number) {
    this._qualidadeCamera = value;
  }

  public get nivelBateria(): number {
    return this._nivelBateria;
  }

  public set nivelBateria(value: number) {
    this._nivelBateria = value;
  }

  public get aplicativos(): Aplicativo[] {
    return this._aplicativos;
  }

  public set aplicativos(value: Aplicativo[]) {
    this._aplicativos = value;
  }

  public get dataFabricacao(): Date {
    return this._dataFabricacao;
  }

  public fazerLigacao(numero: number) {
    if (this._nivelBateria > 0) {
      console.log(this.modelo, "Fazendo ligação para o número", numero);
      this.consumirBateria(1);
    }
  }

  public fotografar() {
    if (this._nivelBateria > 0) {
      console.log(this.modelo, "Fotografando");
      this.consumirBateria(2);
    }
  }

  private consumirBateria(consumo: number) {
    if (this.temBateria()) {
      this._nivelBateria = 0;
    } else {
      this._nivelBateria -= consumo;
    }
  }

  private temBateria(): boolean {
    return this._nivelBateria > 0;
  }

  public instalar(aplicativo: Aplicativo) {
    if (this.temMemoriaSuficientePara(aplicativo)) {
      this._aplicativos.push(aplicativo);
    }
  }

  public temMemoriaSuficientePara(aplicativo: Aplicativo) {
    let memoriaUtilizada = 0;

    for (const app of this._aplicativos) {
      memoriaUtilizada += app.tamanhoEmMegaBytes;
    }

    return (
      aplicativo.tamanhoEmMegaBytes + memoriaUtilizada <=
      this.capacidadeMemoriaInterna
    );
  }

  public ligar() {
    if (this.temBateria()) {
      this._ligado = true;
      console.log("Ligando...");
    } else {
      console.log("Sem bateria");
    }
  }

  public desligar() {
    this._ligado = false;
    console.log("Desligando...");
  }
}
