# VoejaTesteBackend

API REST desenvolvida com **NestJS** para gerenciamento de tarefas.

Este projeto foi desenvolvido como parte do teste técnico da **VOEJA Tech**. A API permite realizar operações de CRUD (Create, Read, Update e Delete) em tarefas, utilizando **MongoDB Atlas** para persistência dos dados e **Swagger** para documentação da API.

---

# Tecnologias utilizadas

* **NestJS** - Framework para construção da API.

  * https://docs.nestjs.com/

* **TypeScript** - Linguagem utilizada no desenvolvimento.

  * https://www.typescriptlang.org/docs/

* **MongoDB Atlas** - Banco de dados NoSQL utilizado para armazenar as tarefas.

  * https://www.mongodb.com/docs/atlas/

* **Mongoose** - ODM utilizado para integração entre NestJS e MongoDB.

  * https://mongoosejs.com/docs/

* **class-validator** - Biblioteca utilizada para validação dos dados recebidos pela API.

  * https://github.com/typestack/class-validator

* **Swagger (OpenAPI)** - Documentação interativa da API.

  * https://docs.nestjs.com/openapi/introduction

---

# Funcionalidades

A API permite:

* Criar uma nova tarefa;
* Listar todas as tarefas cadastradas;
* Buscar uma tarefa pelo seu ID;
* Atualizar uma tarefa existente;
* Remover uma tarefa do banco de dados;
* Validar os dados enviados nas requisições;
* Documentar automaticamente todos os endpoints utilizando Swagger.

---

# Como executar o projeto

## Pré-requisitos

Antes de iniciar o projeto é necessário possuir instalado:

* Node.js (versão 22 ou superior)
* pnpm
* Uma conta no MongoDB Atlas

---

## 1. Clonar o repositório

```bash
git clone https://github.com/wiclok/VoejaTesteBackend.git
```

Entrar na pasta do projeto:

```bash
cd voeja-teste-backend
```

---

## 2. Instalar as dependências

```bash
pnpm install
```

---

## 3. Configurar as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto utilizando o arquivo `.env.example` como referência.

Exemplo:

```env
MONGODB_URI=sua_string_de_conexao
PORT=3000
```

> **Observação:** é necessário utilizar uma conexão válida do MongoDB Atlas.

---

## 4. Executar a aplicação

Modo desenvolvimento:

```bash
pnpm start:dev
```

Modo produção:

```bash
pnpm build
pnpm start:prod
```

A aplicação estará disponível em:

```text
http://localhost:3000
```

---

# Documentação da API

Após iniciar a aplicação, a documentação poderá ser acessada em:

```text
http://localhost:3000/api
```

A documentação foi gerada utilizando Swagger e permite visualizar todos os endpoints, modelos de dados e realizar testes diretamente pelo navegador.

---

# Endpoints

## Criar tarefa

**POST** `/tasks`

### Request

```json
{
  "title": "Comprar leite",
  "description": "Ir ao supermercado comprar leite e pão.",
  "status": "pendente"
}
```

### Response (201)

```json
{
  "_id": "687b8cb8e457692949777c11",
  "title": "Comprar leite",
  "description": "Ir ao supermercado comprar leite e pão.",
  "status": "pendente",
  "createdAt": "2026-07-19T14:12:43.105Z",
  "updatedAt": "2026-07-19T14:12:43.105Z",
  "__v": 0
}
```

---

## Listar tarefas

**GET** `/tasks`

### Response (200)

```json
[
  {
    "_id": "687b8cb8e457692949777c11",
    "title": "Comprar leite",
    "description": "Ir ao supermercado comprar leite e pão.",
    "status": "pendente",
    "createdAt": "2026-07-19T14:12:43.105Z",
    "updatedAt": "2026-07-19T14:12:43.105Z",
    "__v": 0
  }
]
```

---

## Buscar tarefa por ID

**GET** `/tasks/{id}`

### Response (200)

```json
{
  "_id": "687b8cb8e457692949777c11",
  "title": "Comprar leite",
  "description": "Ir ao supermercado comprar leite e pão.",
  "status": "pendente",
  "createdAt": "2026-07-19T14:12:43.105Z",
  "updatedAt": "2026-07-19T14:12:43.105Z",
  "__v": 0
}
```

---

## Atualizar tarefa

**PUT** `/tasks/{id}`

### Request

```json
{
  "title": "Comprar frutas",
  "description": "Comprar frutas para a semana.",
  "status": "concluida"
}
```

### Response (200)

```json
{
  "_id": "687b8cb8e457692949777c11",
  "title": "Comprar frutas",
  "description": "Comprar frutas para a semana.",
  "status": "concluida",
  "createdAt": "2026-07-19T14:12:43.105Z",
  "updatedAt": "2026-07-19T15:30:20.245Z",
  "__v": 0
}
```

---

## Remover tarefa

**DELETE** `/tasks/{id}`

### Response (200)

```json
{
  "_id": "687b8cb8e457692949777c11",
  "title": "Comprar frutas",
  "description": "Comprar frutas para a semana.",
  "status": "concluida",
  "createdAt": "2026-07-19T14:12:43.105Z",
  "updatedAt": "2026-07-19T15:30:20.245Z",
  "__v": 0
}
```

---

# Estrutura do projeto

```text
src/
├── tasks/
│   ├── dto/
│   ├── enums/
│   ├── schemas/
│   ├── tasks.controller.ts
│   ├── tasks.service.ts
│   └── tasks.module.ts
├── app.module.ts
└── main.ts
```

---

# Autor

**Brian Cespedes**

Desenvolvido como parte do processo seletivo da **VOEJA Tech**.
