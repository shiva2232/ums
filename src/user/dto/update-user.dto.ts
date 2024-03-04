import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {
  IsEnum,
  IsNotEmpty,
  IsString,
  IsNotEmptyObject,
  IsEmail,
  IsPhoneNumber,
  MinLength,
  MaxLength,
} from 'class-validator';
import { Gender } from '../../enums/user.enum';
import { locationType, loginType, dobType, nameType } from '../user.type';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsEnum(Gender)
  @IsNotEmpty()
  gender: Gender;
  @IsString()
  name: nameType;
  @IsNotEmptyObject()
  location: locationType;
  @IsEmail()
  email: string;
  @IsNotEmptyObject()
  login: loginType;
  @IsNotEmptyObject()
  dob: dobType;
  @IsNotEmptyObject()
  registered: {
    date: string;
    age: number;
  };
  @IsPhoneNumber()
  phone: string;
  @IsString()
  cell: string;
  @IsNotEmptyObject()
  id: {
    name: string;
    value: string;
  };
  @IsNotEmptyObject()
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  @MinLength(2)
  @MaxLength(2)
  @IsString()
  nat: string;
}
