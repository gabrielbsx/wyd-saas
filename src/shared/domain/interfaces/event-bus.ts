export interface Event<T> {
  handle(event: T): Promise<void>;
}

export interface EventBus {
  publish: (eventName: string, event: EventRequest) => void;
  subscribe: (eventName: string, handler: Function) => void;
}

export type EventRequest<T = unknown> = Readonly<T>;
