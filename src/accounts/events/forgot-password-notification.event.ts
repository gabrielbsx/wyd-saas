import { env } from "@/shared/externals/env";
import { Event } from "@/shared/interfaces/event-bus";
import { INotification } from "@/shared/interfaces/notification";
import { SHARED_BINDINGS } from "@/shared/symbols";
import { inject, injectable } from "tsyringe";

export type ForgotPasswordNotificationEventRequest = Readonly<{
  email: string;
  passwordUpdated: string;
}>;

export interface IForgotPasswordNotificationEvent
  extends Event<ForgotPasswordNotificationEventRequest> {}

export const ForgotPasswordNotificationEventName = "ForgotPasswordNotification";

@injectable()
export class ForgotPasswordNotificationEvent
  implements IForgotPasswordNotificationEvent
{
  constructor(
    @inject(SHARED_BINDINGS.EmailNotification)
    private readonly _emailNotification: INotification
  ) {}

  async handle(event: ForgotPasswordNotificationEventRequest): Promise<void> {
    await this._emailNotification.send({
      from: env.EMAIL_TO,
      to: event.email,
      subject: "Password Updated",
      message: `Your password has been updated to ${event.passwordUpdated}`,
    });
  }
}
