// todo: validar possíveis variantes
export type NotificationRequest = Readonly<{
  from: string;
  to: string;
  subject: string;
  message: string;
  template?: string;
}>;

export interface INotification {
  send(notificationRequest: NotificationRequest): Promise<void>;
}
