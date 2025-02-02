import { Schema, Types } from "mongoose";

export interface IDocument {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export const DocumentSchema = new Schema<IDocument>(
  {
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
    },
    deletedAt: {
      type: Date,
    },
  },
  { _id: true }
);
