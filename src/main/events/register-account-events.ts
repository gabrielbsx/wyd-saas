import {
  CreateGameAccountEvent,
  CreateGameAccountEventName,
} from "@/accounts/events/create-game-account.event";
import { EventBus } from "@/shared/interfaces/event-bus";
import { SHARED_BINDINGS } from "@/shared/symbols";
import { container } from "../ioc/containers";
import { ACCOUNT_BINDINGS } from "@/accounts/symbols";

export const registerAccountEvents = () => {
  const createGameAccountEvent = container.resolve<CreateGameAccountEvent>(
    ACCOUNT_BINDINGS.CreateGameAccountEvent
  );
  const eventBus = container.resolve<EventBus>(SHARED_BINDINGS.EventBus);

  eventBus.subscribe(
    CreateGameAccountEventName,
    createGameAccountEvent.handle.bind(createGameAccountEvent)
  );
};
