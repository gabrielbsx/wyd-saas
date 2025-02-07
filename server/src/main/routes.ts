import { FastifyInstance } from "fastify";
import { accountRoutes } from "@/accounts/routes";
import { npcRoutes } from "@/npcs/routes";

export const routes = (app: FastifyInstance) => {
  accountRoutes(app);
  npcRoutes(app);
};
