import { FastifyInstance } from "fastify";
import { ICreateAccountController } from "./features/create-account/create-account.controller";
import { accountContainer } from "./container";
import { IAunthenticateController } from "./features/authenticate/authenticate.controller";
import { ACCOUNT_BINDINGS } from "./symbols";

export const accountRoutes = (app: FastifyInstance) => {
  app.post("/auth/register", async (request, reply) => {
    const createAccountController =
      accountContainer.get<ICreateAccountController>(
        ACCOUNT_BINDINGS.CreateAccountController
      );

    const response = await createAccountController.handle({
      body: request.body,
    });

    return reply.send(response);
  });

  app.post("/auth/login", async (request, reply) => {
    const authenticateController =
      accountContainer.get<IAunthenticateController>(
        ACCOUNT_BINDINGS.AuthenticateController
      );

    const response = await authenticateController.handle({
      body: request.body,
    });

    return reply.send(response);
  });
};
