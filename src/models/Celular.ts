import { Aplicativo } from "./Aplicativo";

export class Celular {
  private _marca: string;
  public readonly modelo: string;
  private readonly _capacidadeMemoriaInterna: number;
  public qualidadeCamera: number;
  public tipo: string;
  public nivelBateria: number;
  private _ligado: boolean;
  public aplicativos: Aplicativo[];

  constructor(
    marca: string,
    modelo: string,
    capacidadeMemoriaInterna: number,
    qualidadeCamera: number,
    tipo: string
  ) {
    this._marca = marca;
    this.modelo = modelo;
    this._capacidadeMemoriaInterna = capacidadeMemoriaInterna;
    this.qualidadeCamera = qualidadeCamera;
    this.tipo = tipo;
    this.nivelBateria = 100;
    this._ligado = false;
    this.aplicativos = [];
  }

  public get marca(): string {
    return this._marca;
  }

  public get capacidadeMemoriaInterna(): number {
    return this._capacidadeMemoriaInterna;
  }

  public fazerLigacao(numero: number) {
    if (this.nivelBateria > 0) {
      console.log(this.modelo, "Fazendo ligação para o número", numero);
      this.consumirBateria(1);
    }
  }

  public fotografar() {
    if (this.nivelBateria > 0) {
      console.log(this.modelo, "Fotografando");
      this.consumirBateria(2);
    }
  }

  private consumirBateria(consumo: number) {
    if (this.temBateria()) {
      this.nivelBateria = 0;
    } else {
      this.nivelBateria -= consumo;
    }
  }

  private temBateria(): boolean {
    return this.nivelBateria > 0;
  }

  public instalar(aplicativo: Aplicativo) {
    if (this.temMemoriaSuficientePara(aplicativo)) {
      this.aplicativos.push(aplicativo);
    }
  }

  public temMemoriaSuficientePara(aplicativo: Aplicativo) {
    let memoriaUtilizada = 0;

    for (const app of this.aplicativos) {
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
