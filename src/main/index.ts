"reflect-metadata";

import Fastify from "fastify";

import { routes } from "./routes";
import { plugins } from "./plugins/plugins";
import { logger } from "./plugins/logger";
import { DataSourceConnection } from "@/shared/data-source/connection";
import { errorHandler } from "./plugins/exceptions";
import { registerEvents } from "./events";
import { docs } from "./plugins/docs";
import { swagger } from "./plugins/swagger";

await DataSourceConnection.connect();

registerEvents();

const fastify = Fastify({ logger });

errorHandler(fastify);

await swagger(fastify);
await docs(fastify);

await plugins(fastify);

routes(fastify);

fastify.listen({ port: 3000 });
