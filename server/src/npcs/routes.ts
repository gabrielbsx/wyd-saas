import { FastifyInstance } from "fastify";
import { container } from "tsyringe";
import { IFetchNpcsController } from "./features/fetch-npcs/fetch-npcs.controller";
import { NPC_BINDINGS } from "./symbols";
import { IFetchNpcByNameController } from "./features/fetch-npc-by-name/fetch-npc-by-name.controller";

export const npcRoutes = (app: FastifyInstance) => {
  app.get("/npc", async (_request, reply) => {
    const fetchNpcsController = container.resolve<IFetchNpcsController>(
      NPC_BINDINGS.FetchNpcsController
    );

    const response = await fetchNpcsController.handle({});

    return reply.status(response.status).send(response.body);
  });

  app.get("/npc/:name", async (request, reply) => {
    const fetchNpcByNameController =
      container.resolve<IFetchNpcByNameController>(
        NPC_BINDINGS.FetchNpcByNameController
      );

    const response = await fetchNpcByNameController.handle({
      params: request.params,
    });

    return reply.status(response.status).send(response.body);
  });
};
