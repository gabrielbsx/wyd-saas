import { Container } from "inversify";
import { SHARED_BINDINGS } from "./symbols";
import { EventBus } from "./interfaces/event-bus";
import { EventBusImpl } from "./event/event-bus";

const container = new Container();

container.bind<EventBus>(SHARED_BINDINGS.EventBus).to(EventBusImpl);

export const sharedContainer = container;
