import { FastifyInstance } from "fastify";

import fastifyPrintRoutes from "fastify-print-routes";

export const plugins = async (app: FastifyInstance) => {
  await app.register(fastifyPrintRoutes);
};
