import fastify from "fastify";
import cors from "@fastify/cors"
import { memoriesRoutes } from "./routes/memories";

//** API RESTFULL - usa os métodos HTTP  (GET, POST, PUT, DELETE) para manipular recursos. Aleém disso, uma API RESTfull possui uma URI única que pode ser manipulado pelos métodos HTTP*/

const app = fastify();

app.register(cors, {
  origin: true
  // origin: ['http://localhost:3001', 'http://urlsdeproducao'] deve ser indicado as urls de front end que podem acessar o servidor, no caso é o localhost em que está rodando o desenvolvimento e o endereço que será de fato o que aparecerá para o cliente. Neste caso, vamos usar o origin: true que dá acesso a qualquer um, (somente para estudo)
})

app.register(memoriesRoutes)
//* Para que o localhost funcione, é necessário criar uma rota para fazer a requisição para a aplicação, usando os métodos HTTP
//get() - recupera informações;
//push() - criar um novo recurso;
//put() - atualizar alguma coisa;
//patch() - atualizar uma informção específica;
//delete () - para deletar alguma coisa;
//head(), options() ...

app
  .listen({ port: 3001 })
  .then(() => console.log(`Servidor rodando na porta http://localhost:3001`));
