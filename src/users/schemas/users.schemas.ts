import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CreateUsersDto } from "../dto/create-users.dto";

export type UsersDocument = Users & Document;

@Schema({ timestamps: true })
export class Users {
  @Prop()
  name: string;

  @Prop()
  lastName: string;

  @Prop()
  age: number;

  @Prop()
  email: string;

  @Prop()
  address: {
    city: string
    street: string
    house: string
  }
}

export const UserSchema = SchemaFactory.createForClass(Users);
