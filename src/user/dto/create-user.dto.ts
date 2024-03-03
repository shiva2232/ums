import { Gender } from 'src/enums/user.enum';
import { nameType, loginType, dobType, locationType } from '../user.type';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNotEmptyObject,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
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
