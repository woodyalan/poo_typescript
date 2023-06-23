import { SistemasOperacionais } from "../enum/SistemasOperacionais";
import { SistemaOperacional } from "./SistemaOperacional";

export class Android extends SistemaOperacional {
  constructor(versao: number) {
    super(SistemasOperacionais.ANDROID, "Google", versao);
  }

  fazerBackup(): void {
    console.log(this.nome, this.versao, "Fazendo backup no Google Drive");
  }
}
