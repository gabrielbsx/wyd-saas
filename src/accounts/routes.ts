import { FastifyInstance } from "fastify";
import { ICreateAccountController } from "./features/create-account/create-account.controller";
import { IAunthenticateController } from "./features/authenticate/authenticate.controller";
import { ACCOUNT_BINDINGS } from "./symbols";
import { container } from "@/main/ioc/containers";
import { loginSchemaDocs } from "./docs/login.docs";
import { registerSchemaDocs } from "./docs/register.docs";

export const accountRoutes = (app: FastifyInstance) => {
  app.post("/auth/register", registerSchemaDocs, async (request, reply) => {
    const createAccountController = container.get<ICreateAccountController>(
      ACCOUNT_BINDINGS.CreateAccountController
    );

    const response = await createAccountController.handle({
      body: request.body,
    });

    return reply.status(response.status).send(response);
  });

  app.post("/auth/login", loginSchemaDocs, async (request, reply) => {
    const authenticateController = container.get<IAunthenticateController>(
      ACCOUNT_BINDINGS.AuthenticateController
    );

    const response = await authenticateController.handle({
      body: request.body,
    });

    return reply.status(response.status).send(response);
  });
};
