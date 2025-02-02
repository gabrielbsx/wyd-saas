import { DocumentSchema, IDocument } from "@/shared/data-source/document";
import { model, Schema } from "mongoose";

export interface IAccountModelDocument extends IDocument {
  username: string;
  email: string;
  password: string;
}

export const AccountSchema = new Schema<IAccountModelDocument>({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 4,
    maxlength: 10,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
});

AccountSchema.add(DocumentSchema);

export const AccountModel = model<IAccountModelDocument>("User", AccountSchema);
