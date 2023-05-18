import { PrismaClient } from "@prisma/client";

// 1**Fazer a conexão criando o novo prisma/client
export const prisma = new PrismaClient(
  {log: ["query"]} //faz log de todas as queries executadas pelo banco de dados
);