import { SistemasOperacionais } from "../enum/SistemasOperacionais";

export abstract class SistemaOperacional {
  nome: SistemasOperacionais;
  empresaProprietaria: string;
  versao: number;

  constructor(
    nome: SistemasOperacionais,
    empresaProprietaria: string,
    versao: number
  ) {
    this.nome = nome;
    this.empresaProprietaria = empresaProprietaria;
    this.versao = versao;
  }

  abstract fazerBackup(): void;
}
