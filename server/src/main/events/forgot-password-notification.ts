import { EventBus } from "@/shared/domain/interfaces/event-bus";
import { SHARED_BINDINGS } from "@/shared/symbols";
import { container } from "../ioc/containers";
import { ACCOUNT_BINDINGS } from "@/accounts/symbols";
import {
  ForgotPasswordNotificationEventName,
  IForgotPasswordNotificationEvent,
} from "@/accounts/events/forgot-password-notification.event";

export const registerForgotPasswordEvent = () => {
  const event = container.resolve<IForgotPasswordNotificationEvent>(
    ACCOUNT_BINDINGS.ForgotPasswordNotificationEvent
  );
  const eventBus = container.resolve<EventBus>(SHARED_BINDINGS.EventBus);

  eventBus.subscribe(
    ForgotPasswordNotificationEventName,
    event.handle.bind(event)
  );
};
