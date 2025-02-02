import mongoose from "mongoose";
import { env } from "../env";

export class DataSourceConnection {
  static async connect(connection?: string) {
    await mongoose.connect(connection || env.MONGO_URL, {
      timeoutMS: 100,
    });
  }
}
