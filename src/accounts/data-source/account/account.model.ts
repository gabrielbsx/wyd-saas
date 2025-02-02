import { DocumentSchema, IDocument } from "@/shared/data-source/document";
import { model, Schema } from "mongoose";

export interface IAccountModelDocument extends IDocument {
  username: string;
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
  password: {
    type: String,
  },
});

AccountSchema.add(DocumentSchema);

export const AccountModel = model<IAccountModelDocument>("User", AccountSchema);
