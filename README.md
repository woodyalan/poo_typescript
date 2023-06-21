# Programação Orientada a Objetos com TypeScript

## Abstração

### Atributos e Métodos
1. Criar uma classe para que a partir dela seja possível instanciar animais. Um animal deve ter um nome, cor, raça, peso, idade. Além dessas características, um animal deve emitir sons e se locomover.
2. Baseado na classe Celular vista a pouco, implementar para que a cada ligação realizada ou recebida o nível da bateria diminua 1%. Ao fotografar ou conectar a internet, o nível da bateria deve diminuir 2%. Não permitir que alguma ação seja realizada sem bateria disponível.
3. Criar uma classe que represente um aplicativo que será instalado em um celular. Um aplicativo deve possuir um nome e tamanho em Megabytes. Deve ser possível adicionar vários aplicativos a um celular, desde que possua espaço disponível na memória interna.

### Construtores
4. Criar um construtor para a classe Aplicativo que inicialize todos os atributos.
5. Criar um construtor para a classe Celular que inicialize todos os atributos. Ao construir um celular, o celular deve estar desligado e não deve permitir que seja inicializado com aplicativos.

## Encapsulamento

6. Alterar a acessibilidade dos atributos das classes Aplicativo e Celular para privados e criar getters e setters para todos, exceto para o atributo ligado. Esse atributo deve ser manipulado pelos métodos ligar e desligar.
7. Criar um atributo que indique a data de fabricação de um celular. Essa data deve ser registrada automaticamente e não pode ser alterada.
8. Criar uma classe que represente uma uma loja de celulares. Uma loja deve ter um nome, endereço, cidade e uma lista de Celulares disponíveis para venda. Deve ser possível adicionais novos celulares e também listar os celulares disponíveis de forma que não seja possível remover celulares da lista.

## Henrança

8. Criar uma classe Peixe que possua pelo menos 2 características e comportamentos adicionais de Animal.

## Polimorfismo
