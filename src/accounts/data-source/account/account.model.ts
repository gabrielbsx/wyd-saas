import { model, Schema, Types } from "mongoose";

export interface AccountModelType {
  _id: Types.ObjectId;
  username: string;
  password: string;
}

export const AccountSchema = new Schema<AccountModelType>({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 4,
    maxlength: 10,
  },
  password: {
    type: String,
  },
});

export const AccountModel = model<AccountModelType>("User", AccountSchema);
