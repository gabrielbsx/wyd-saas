"reflect-metadata";

import Fastify from "fastify";

import { routes } from "./routes";
import { plugins } from "./plugins";
import { registerEvents } from "./events";
import { logger } from "./logger";
import { containers } from "./containers";
import { DataSourceConnection } from "@/shared/data-source/connection";

await DataSourceConnection.connect();

registerEvents();

containers();

const fastify = Fastify({ logger });

await plugins(fastify);

routes(fastify);

fastify.listen({ port: 3000 });
