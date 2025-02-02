import { model, Schema, Types } from "mongoose";

export interface AccountModelDocument {
  _id: Types.ObjectId;
  username: string;
  password: string;
}

export const AccountSchema = new Schema<AccountModelDocument>({
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

export const AccountModel = model<AccountModelDocument>("User", AccountSchema);
