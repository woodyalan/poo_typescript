// import { Animal } from "./models/Animal";
import { Android } from "./models/Android";
import { Aplicativo } from "./models/Aplicativo";
import { GalaxyS21 } from "./models/GalaxyS21";
import { IOS } from "./models/IOS";
import { IPhone } from "./models/IPhone";
import { Papagaio } from "./models/Papagaio";

// let iphone13 = new Celular();
// iphone13.marca = "Apple";
// iphone13.modelo = "iPhone 13";
// iphone13.capacidadeMemoriaInterna = 500;
// iphone13.qualidadeCamera = 12;
// iphone13.tipo = "Smartphone";
// iphone13.nivelBateria = 2;

// console.log(iphone13);

// iphone13.fazerLigacao(193);
// iphone13.fotografar();
// iphone13.fazerLigacao(192);

// console.log(iphone13);

// let instagram = new Aplicativo();
// instagram.nome = "Instagram";
// instagram.tamanhoEmMegaBytes = 100;

// let facebook = new Aplicativo();
// facebook.nome = "Facebook";
// facebook.tamanhoEmMegaBytes = 200;

// let camera = new Aplicativo();
// camera.nome = "Camera";
// camera.tamanhoEmMegaBytes = 50;

// let cachorro = new Animal();
// cachorro.nome = "Rex";

// iphone13.instalar(instagram);
// iphone13.instalar(facebook);

// console.log(iphone13);

// let cachorro = new Animal("Rex", "Marrom", "Vira-lata", 10, 3);
// console.log(cachorro);

let linkedin = new Aplicativo("Linkedin", 50);
// linkedin.tamanhoEmMegaBytes = 100;
// console.log(linkedin.nome);

console.log(linkedin);

// let iphone13 = new IPhone("Apple", "iPhone 13", 500, 12);
// iphone13.ligar();
// iphone13.capacidadeMemoriaInterna = 1000;
// console.log(iphone13);

// let galaxyS21 = new GalaxyS21("Samsung", "Galaxy S21", 500, 12);
// console.log(galaxyS21);

// let casasBahia = new Loja("Casas Bahia", "Rua 1", "Campo Mourão");

// casasBahia.adicionarAoEstoque(iphone13);
// console.log(casasBahia);
// console.log(casasBahia.celulares);

// let papagaio = new Animal("Papagaio", "Verde", "Papagaio", 1, 1);
// papagaio.locomover(10);
// // papagaio.botarOvo();

// let pombo = new Ave("Pombo", "Cinza", "Pombo", 1, 1, false);
// pombo.locomover(10);
// pombo.botarOvo();

let loro = new Papagaio("Loro", "Verde", "Papagaio", 1, 1, false);
loro.botarOvo();
loro.emitirSom("Oi");
loro.locomover(10);

// let nemo = new Peixe("Nemo", "Laranja", "Peixe-palhaço", 1, 1, true, 2);

// nemo.nadar();
// nemo.respirarDebaixoDAgua();
// nemo.locomover(10);

let lollipop = new Android(12);
lollipop.fazerBackup();

let ios15 = new IOS(15);
ios15.fazerBackup();

let galaxyS21 = new GalaxyS21("Samsung", "Galaxy S21", 500, 12);
console.log(galaxyS21);

let iphone13 = new IPhone("Apple", "iPhone 13", 500, 12);
console.log(iphone13);
iphone13.sistemaOperacional.fazerBackup();
