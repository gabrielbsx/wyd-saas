import { FastifyInstance } from "fastify";
import fastifySwagger from "@fastify/swagger";

export const swagger = async (app: FastifyInstance) => {
  await app.register(fastifySwagger, {
    openapi: {
      info: {
        title: "My Fastify App",
        version: "1.0.0",
      },
      components: {
        securitySchemes: {
          apiKey: {
            type: "apiKey",
            name: "apiKey",
            in: "header",
          },
        },
      },
    },
  });

  app.get("/openapi.json", async () => {
    return app.swagger();
  });
};
