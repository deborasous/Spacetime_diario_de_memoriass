import { FastifyInstance } from "fastify";
import {z} from 'zod'
import { prisma } from "../lib/prisma";

export async function memoriesRoutes(app: FastifyInstance) {
  //pegar todas as memórias
  app.get("/memories", async () => {
    const memories = await prisma.memory.findMany({
      orderBy: { //ordenar as memorias por ordem ascendente da data criada
        createdAt: 'asc'
      }
    })
    return memories.map(memory =>{
      //retornar apenas os itens desejados e o content abreviado
      return {
        id: memory.id,
        coverUrl: memory.coverUrl,
        excerpt: memory.content.substring(0, 165).concat('...')
      }
    })
  });

  //pegar uma memória específica
  app.get("/memories/:id", async (request) => {
    // validar o id usando o ZOD e valida que esse id é do tipo uuid()
    const paramsSchema = z.object({
      id: z.string().uuid()
    })

    //passa o request.params para o paramsSchema, para ele verificar se o id que está sendo passado pelo request.params segue a validação do paramsSchema acima, se não retorna um erro.
    const {id} = paramsSchema.parse(request.params)

    //agora encontrar a memoria com o id solicitado que seja igual ao id salvo no banco de dados, se não dispara um erro. Depois retorna a memória
    const memory = await prisma.memory.findUniqueOrThrow({
      where:{
        id,
      }
    })
    return memory
  });

  //criar uma memória
  app.post("/memories", async (request) => {
    //validar as informações necessárias para a criação de uma memoria e definir um valor padrão para para o isPublic
    //para retornar o valor de um boolean, usar o COERCE que converte (0, undefined, null, '') em false e qualquer conteudo como string ou número em true
    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      isPublic: z.coerce.boolean().default(false)
    })

    const {content, coverUrl, isPublic} = bodySchema.parse(request.body)

    //salvar no banco de dados
    const memory = await prisma.memory.create({
      data: {
        content,
        coverUrl,
        isPublic,
        userId: '5acfcaa9-0aee-4080-8717-fbdeb0d6187e' //id do usuário criado no prisma studio, mudar depois
      }
    })
    return memory
  });

  //alterar uma memória específica
  app.put("/memories/:id", async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid()
    })

    const {id} = paramsSchema.parse(request.params)
    
    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      isPublic: z.coerce.boolean().default(false)
    })

    const {content, coverUrl, isPublic} = bodySchema.parse(request.body)

    //atualizar os dados
    const memory = await prisma.memory.update({
      where:{
        id,
      },
      data:{
        content, 
        coverUrl, 
        isPublic
      }
    })
    //retorna a memoria atualizada
    return memory
  });

   //remover uma memória específica
   app.delete("/memories/:id", async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid()
    })

    const {id} = paramsSchema.parse(request.params)
      //não retorna nada, pois o valor foi excluido
      await prisma.memory.delete({
        where:{
          id,
        }
      })
  });


//Exemplo: se quiser retornar uma mensagem no navegador, usar o get()
//1**ACESSAR O SERVIDOR USANDO O PRISMA/CLIENT
// app.get("/users", async () => {
//   //1**Dentro da rota, lista todos os usuários salvos no banco
//   const users = await prisma.user.findMany();
//   return users; 
// });
}