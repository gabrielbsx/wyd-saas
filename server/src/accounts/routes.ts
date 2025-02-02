import { FastifyInstance } from "fastify";
import { ICreateAccountController } from "./features/create-account/create-account.controller";
import { IAunthenticateController } from "./features/authenticate/authenticate.controller";
import { ACCOUNT_BINDINGS } from "./symbols";
import { loginSchemaDocs } from "./infra/docs/login.docs";
import { registerSchemaDocs } from "./infra/docs/register.docs";
import { IForgotPasswordController } from "./features/forgot-password/forgot-password.controller";
import { container } from "@/main/ioc/containers";
import { forgotPasswordDocs } from "./infra/docs/forgot-password.docs";

export const accountRoutes = (app: FastifyInstance) => {
  app.post("/auth/register", registerSchemaDocs, async (request, reply) => {
    const createAccountController = container.resolve<ICreateAccountController>(
      ACCOUNT_BINDINGS.CreateAccountController
    );

    const response = await createAccountController.handle({
      body: request.body,
    });

    return reply.status(response.status).send(response);
  });

  app.post("/auth/login", loginSchemaDocs, async (request, reply) => {
    const authenticateController = container.resolve<IAunthenticateController>(
      ACCOUNT_BINDINGS.AuthenticateController
    );

    const response = await authenticateController.handle({
      body: request.body,
    });

    return reply.status(response.status).send(response.body);
  });

  app.post(
    "/auth/forgot-password",
    forgotPasswordDocs,
    async (request, reply) => {
      const forgotPasswordController =
        container.resolve<IForgotPasswordController>(
          ACCOUNT_BINDINGS.ForgotPasswordController
        );

      const response = await forgotPasswordController.handle({
        body: request.body,
      });

      return reply.status(response.status).send(response);
    }
  );
};
