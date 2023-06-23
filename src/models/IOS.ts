import { SistemasOperacionais } from "../enum/SistemasOperacionais";
import { SistemaOperacional } from "./SistemaOperacional";

export class IOS extends SistemaOperacional {
  constructor(versao: number) {
    super(SistemasOperacionais.IOS, "Apple", versao);
  }

  fazerBackup(): void {
    console.log(this.nome, this.versao, "Fazendo backup no iCloud");
  }
}
