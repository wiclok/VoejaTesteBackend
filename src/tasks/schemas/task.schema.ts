import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { TaskStatus } from "../enums/task-status.enum";

export type TaskDocument = HydratedDocument<Task>

@Schema({
  timestamps: true,
})
export class Task {
  @Prop({
    required: true,
    trim: true,
  })
  title!: string;

  @Prop({
    required: true,
    trim: true,
  })
  description!: string;

  @Prop({
    required: true,
    enum: TaskStatus,
    default: TaskStatus.PENDING,
  })
  status!: TaskStatus;
}

export const TaskSchema = SchemaFactory.createForClass(Task)