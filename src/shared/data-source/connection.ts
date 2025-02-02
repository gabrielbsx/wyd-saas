import mongoose from "mongoose";
import { env } from "../externals/env";

export class DataSourceConnection {
  static async connect() {
    await mongoose.connect(env.MONGO_URL, {
      timeoutMS: 100,
    });
  }
}
