import { injectable } from "tsyringe";
import { EventBus, EventRequest } from "../interfaces/event-bus";

@injectable()
export class EventBusImpl implements EventBus {
  static subscribes: Map<string, Function[]> = new Map();

  publish(eventName: string, event: EventRequest) {
    const handlers = EventBusImpl.subscribes.get(eventName);

    if (!handlers) {
      return;
    }

    for (const handler of handlers) {
      handler(event);
    }
  }

  subscribe(eventName: string, handler: Function): void {
    if (!EventBusImpl.subscribes.has(eventName)) {
      EventBusImpl.subscribes.set(eventName, []);
    }

    const handlers = EventBusImpl.subscribes.get(eventName);
    handlers?.push(handler);
  }
}
