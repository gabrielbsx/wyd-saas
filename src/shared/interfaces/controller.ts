import { Request } from "../types/request";
import { Response } from "../types/response";

export interface Controller {
  handle(request: Request): Promise<Response>;
}
