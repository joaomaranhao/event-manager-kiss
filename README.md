# API REST para gerenciar eventos e pessoas

## Instruções para rodar o projeto

### Instalação

- Clone o repositório
- Instale as dependências com `yarn`
- Crie um arquivo `.env` na raiz do projeto com as variáveis de ambiente
- Rode o projeto com `yarn dev`

### Variáveis de ambiente

- `DATABASE_URL`: URL do banco de dados

### Scripts

- `yarn dev`: roda o projeto em modo de desenvolvimento
- `yarn build`: compila o projeto para produção
- `yarn start`: roda o projeto em modo de produção

## Rotas

### Eventos

- `GET /events`: lista todos os eventos
- `GET /events/:id`: lista um evento específico
- `POST /events`: cria um novo evento
- `PUT /events/:id`: atualiza um evento específico
- `DELETE /events/:id`: deleta um evento específico

### Pessoas

- `GET /person`: lista todas as pessoas
- `GET /person/:id`: lista uma pessoa específica
- `POST /person`: cria uma nova pessoa
- `PUT /person/:id`: atualiza uma pessoa específica
- `DELETE /person/:id`: deleta uma pessoa específica

### Inscrições em eventos

- `GET /event/:id/person`: lista todas as inscrições em um evento específico
- `POST /event/person`: cria uma nova inscrição em evento
- `DELETE /event/person/:id`: deleta uma inscrição em evento específica

## Tecnologias

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)


