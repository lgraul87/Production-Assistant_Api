import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  duration: string;

  @Prop({ required: true })
  date: string;
}
export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  photo: string;

  @Prop({ required: true })
  email: string;
}
 export const TaskSchema = SchemaFactory.createForClass(Task);
 export const UserSchema = SchemaFactory.createForClass(User);


