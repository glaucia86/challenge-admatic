# Challenge Admatic: b2wads (Glaucia Lemos)

Repositório do desafio de código da Admatic para a vaga de Desenvolvedor Full Stack Sênior para a equipe da B2WAds. O link do desafio do da vaga encontra-se [AQUI](https://github.com/admatic-tool/vaga-b2wads-senior)

## Recursos Utilizados no Desenvolvimento da Aplicação: :fire: :fire:

- Visual Studio Code
- Node.Js ~ v. 8.x
- Npm ~ v. 5.x
- Express.Js ~ v.4.0;
- Conceito RestFul;
- MongoDb;
- SQL SERVER;
- RabbitMq
- JSON data (para retornar os dados);
- PostMan (testar a API criada);


## Executar Localmente: :rocket: :rocket:

Caso você deseja executar o projeto na sua máquina local, basta seguir os passos abaixo:

## Começando...

Para começar, você deve simplesmente clonar o repositório do projeto na sua máquina e instalar as dependências.

### Pre-Requisitos

Antes de instalar as dependências no projeto, você precisa já ter instalado na sua máquina:

* **Node.Js**: Caso não tenha, basta realizar o download [Aqui](https://nodejs.org/en/)
* **MongoDb**: Caso também não tenha, basta realizar o download [Aqui](https://www.mongodb.com/download-center#community)


### Instalando as Dependências

Abre o cmd (caso esteja utilizando o Windows) e digite a path do seu projeto

```
cd "C:\Users\NomeDoComputador\Documents\..."
```

Depois, quando estiver na pasta do projeto, basta digitar no cmd a seguinte instrução:

```
npm install
```

Ao digitar a instrução acima, automaticamente ele irá baixar todas as dependências listadas no arquivo package.json:

* `node_modules` - que contêm os packages do npm que precisará para o projeto.

### Executando a Aplicação

Bom, agora na mesma tela do cmd, basta iniciar o server para o projeto ser executado localmente.

```
npm run dev
```

Depois, você precisará abrir um outro terminal na sua máquina e iniciar o MongoDb. Basta digitar na tela do cmd o seguinte comando:

```
mongod
```

Caso o MongoDb esteja devidamente instalado em sua máquina, ele iniciará o serviço mostrando que a port 27017 foi iniciada.


Agora, abre a página da aplicação em `http://localhost:8000/api`. E pronto a aplicação será executada de maneira local na sua máquina.        
**documentação em desenvolvimento**

