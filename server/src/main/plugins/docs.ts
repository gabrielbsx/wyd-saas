import { FastifyInstance } from "fastify";

export const docs = async (app: FastifyInstance) => {
  await app.register(import("@scalar/fastify-api-reference"), {
    routePrefix: "/docs",
    configuration: {
      title: "WYD SaaS API",
      spec: {
        url: "/openapi.json",
      },
      theme: "dark",
    },
  });
};
