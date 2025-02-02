import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { ZodError } from "zod";

export function errorHandler(fastify: FastifyInstance) {
  fastify.setErrorHandler(
    (error, _request: FastifyRequest, reply: FastifyReply) => {
      if (error instanceof ZodError) {
        return reply.status(400).send({
          statusCode: 400,
          error: "Bad Request",
          message: "Validation failed.",
          details: error.errors.map((e) => ({
            path: e.path.join("."),
            message: e.message,
          })),
        });
      }

      if (error.statusCode) {
        return reply.status(error.statusCode).send({
          statusCode: error.statusCode,
          error: error.name || "Error",
          message: error.message,
        });
      }

      fastify.log.error(error);

      return reply.status(500).send({
        statusCode: 500,
        error: "Internal Server Error",
        message: "Something went wrong.",
      });
    }
  );
}
