import {
  CreateGameAccountEvent,
  CreateGameAccountEventName,
} from "@/accounts/events/create-game-account.event";
import { EventBus } from "@/shared/interfaces/event-bus";
import { accountContainer } from "../container";
import { ACCOUNT_BINDINGS } from "../symbols";
import { sharedContainer } from "@/shared/container";
import { SHARED_BINDINGS } from "@/shared/symbols";

export const registerAccountEvents = () => {
  const createGameAccountEvent = accountContainer.get<CreateGameAccountEvent>(
    ACCOUNT_BINDINGS.CreateGameAccountEvent
  );
  const eventBus = sharedContainer.get<EventBus>(SHARED_BINDINGS.EventBus);

  eventBus.subscribe(
    CreateGameAccountEventName,
    createGameAccountEvent.handle.bind(createGameAccountEvent)
  );
};
