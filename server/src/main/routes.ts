import { FastifyInstance } from "fastify";
import { accountRoutes } from "@/accounts/routes";

export const routes = (app: FastifyInstance) => {
  accountRoutes(app);
};
