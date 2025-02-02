import { FastifyInstance } from "fastify";
import cors from "@fastify/cors";

import fastifyPrintRoutes from "fastify-print-routes";

export const plugins = async (app: FastifyInstance) => {
  await app.register(fastifyPrintRoutes);
  await app.register(cors, {});
};
