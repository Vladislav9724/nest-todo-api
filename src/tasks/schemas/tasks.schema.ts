import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Tasks & Document;

@Schema({ timestamps: true })
export class Tasks {
  @Prop()
  title: string;

  @Prop()
  body: string;

  @Prop({ default: false })
  isCompleted: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Tasks);
