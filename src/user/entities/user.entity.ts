import { Gender, UserTitle } from 'src/enums/user.enum';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  NameType,
  LocationType,
  LoginType,
  DobType,
  RegisteredType,
  IdType,
  PictureType,
} from '../interfaces/user';

@Schema()
export class User {
  @Prop({ type: String, required: true })
  gender: Gender;

  @Prop({ required: true, type: Object })
  name: NameType;

  @Prop({ required: true, type: Object })
  loc: LocationType;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true, type: Object })
  login: LoginType;

  @Prop({ required: true, type: Object })
  dob: DobType;

  @Prop({ required: true, type: Object })
  registered: RegisteredType;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  cell: string;

  @Prop({ required: true, type: Object })
  picture: PictureType;

  @Prop({ required: true })
  nat: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
