import { Celular } from "./Celular";

export class Loja {
  private _nome: string;
  private _endereco: string;
  private _cidade: string;
  private _celulares: Celular[];

  constructor(nome: string, endereco: string, cidade: string) {
    this._nome = nome;
    this._endereco = endereco;
    this._cidade = cidade;
    this._celulares = [];
  }

  public adicionarAoEstoque(celular: Celular) {
    this._celulares.push(celular);
  }

  public get celulares(): readonly Celular[] {
    return this._celulares;
  }
}
