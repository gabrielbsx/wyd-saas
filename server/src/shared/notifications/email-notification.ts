import { injectable } from "tsyringe";
import { INotification, NotificationRequest } from "../domain/interfaces/notification";

@injectable()
export class EmailNotificationEvent implements INotification {
  async send(notificationRequest: NotificationRequest): Promise<void> {
    console.log("Sending email notification", notificationRequest);
  }
}
