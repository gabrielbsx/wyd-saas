import { Event } from "@/shared/interfaces/event-bus";
import { injectable } from "inversify";

export type CreateGameAccountEventRequest = Readonly<{
  username: string;
  password: string;
}>;

export interface ICreateGameAccountEvent
  extends Event<CreateGameAccountEventRequest> {}

export const CreateGameAccountEventName = "CreateGameAccountEvent";

@injectable()
export class CreateGameAccountEvent implements ICreateGameAccountEvent {
  async handle(dto: CreateGameAccountEventRequest): Promise<void> {
    console.log("CreateGameAccountEventImpl", dto);
  }
}
