# BACKEND

## Typescript module

### 1 - Iniciar o projeto

```
npm init -y
```

### 2 - Instalar Typescript

```
npm init typescript -D
```

### 3 - Instalar @types/node

Ajuda o typescript a entender que ele está dentro de um projeto node, podendo utilizar coisa globais do node, como a variável process, imports da biblioteca do node, etc.

```
npm i @types/node -D
```

### 4 - Instalat a biblioteca TSX

O TSX automatiza o processo de converter o projeto typescript para javascript

```
npm i tsx -D
```

Para rodar um projeto com funcionalidades do TS, por exemplo, um console.log no terminal sem precisar converter, roda:

```
npx tsx src/server.ts
```

### 5 - Instalar fastify

O Fastify é um framework usado em produção, responsável por fornecer uma estrutura robusta na criação de APIs e serviços web. Fornece estrutura e abstrações que facilitam o processo de criação e gerenciamento das rotas, manipulação de solicitações e respostas, validações de entrada, autenticação, registro de logs , entre outros.

Rotas: permite fazer roteamento para diferentes endpints da API. Definição de URLs, métodos http e manipulações de funções associadas as rotas.

Manipulação de solicitações: facilita na solicitação HTTP recebidas e o envio de respostas aos clientes.

Validáção de entradas: valida e verifica a entrada recebida nas solicitações e cabeçalhos, aplicando regras de validação personalizadas.

OBS: funciona como o express

```
npm i fastify
```

### 6 - Instalar SQLite e prisma

O SQLite é um sistema de gerenciamento de banco de dados relacional(SGBDR) embutido que implementa uma versão leve e compacta do SQL. Não tem a necessidade de comunicação com servidor externo, pois, tudo é rodado a nível de biblioteca ndentro de um arquivo dentro do diretório.

O Prisma é um conjunto de ferramentas de desenvolvimento de banco de dados que agiliza a interação entre o código do aplicativo e o banco de dados (usado com o JS e o TS), ou seja, ele intercepta a comunicação do backend com o banco de dados.

```
npm i prisma -D
```

Dizer para o Prisma que deseja usar um banco SQLite. Após rodar a linha de código abaixo, vai ser criado uma pasta Prisma com um arquivo schema.prisma (não mexer nas configurações de dentro do arquivo), e um arquivo .env no diretório que trás uma configuração que diz onde o banco de dados vai ficar salvo.

Dentro do arquivo do prisma, é onde serão definidas as tabelas do banco de dados.

```
npx prisma init --datasource-provider SQLite
```

### 7 - Criar a tabela no banco de dados

Depois de modelar a tabela dentro do arquivo prisma/schema.prisma, deve criar a tabela no banco de dados executando o comando abaixo: este código vai ler todas as alterações do arquivo desde a última vez que o comando foi executado.

Migrate é uma forma de versionar as alterações, sendo assim, deve dar um nome para a alteração. Assim, sempre que houver uma alteração e um novo commit, será criado uma pasta com o commit e data da criação e dentro dele será criado um arquivo .sql com os dados da tabela criada, que retorna as chaves e os "valores" da tabela criada no schema.prisma.

O arquivo dev.db é o banco de dados

```
npx prisma migrate dev
```

Para verificar se a tabela foi criada, rodar o comando:

```
npx prisma studio
```

que abrirá um novo localhost onde será possível encontrar o banco de dados com os nomes das tabelas, (em schema.prisma, no primeiro, é User).

Neste localhost, dentro da tabela User, cria se um novo usauário clicando em add record, coloca somente o nome do novo usuário, já que o id está sendo gerado pelo uuid.

### 8 - Acessar o banco de dados de dentro do servidor

No arquivo src/server.ts.

O prisma/client vai acessar o servidor do banco de dados e listar todos os usuários que estiver nele e mais os que forem sendo adicionados.

```
npm i @prisma/client
```

### 9 - Rodar o npx

O npx é uma forma de executar binários das bibliotecas dos projetos.
Exemplo: vamos rodar a pastar tsc, localizada dentro do node_modules/bin. Ao final, deve ser criado um arquivo tsconfig.json, que possui as configurações do typescript dentro do projeto.

```
npx tsc --init
```

### 10 - Instalar o ZOD

O ZOD faz validações, neste caso estamos usando para fazer validações dos valores das tabelas, como o ID

```
npm i zod
```

### 11 - Instalar o httpie

O HTTPIE possibilita ver a interface gráfica diretamente no terminal

```
snap install httpie
```
para fazer uma solicitação HTTP POST ou outros metodos usar o exemplo abaixo, alterando os endereços e o método. Isso imprime no terminal os dados salvos em Prisma studio.
```
http POST http://localhost:3001/memories content=test coverUrl=https://github.com/diego3g.png isPublic=1 --json
```

### 12 - Instalar o CORS

O plugin vai permitir lidar e configurar as políticas de segurança do CORS, ou seja, ajuda a controlar as permissões de acesso a recursos entre domínios diferentes, definindo os domínios e cabeçalhos enviados na solicitação HTTP.

```
 npm i @fastify/cors
```
## ESTRUTURA DO DIRETÓRIO

### Criar pasta src

Dentro dessa pasta devem ficar todos os arquivos e pastas do projeto

