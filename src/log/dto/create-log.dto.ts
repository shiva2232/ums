import { IsBoolean, IsNumber, IsObject, IsString } from 'class-validator';
import { RequestMethod, ResType } from '../log.type';
import { AxiosResponse } from 'axios';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

export class CreateLogDto {
  @IsBoolean()
  success: boolean;
  @IsString()
  requestTime: string;
  @IsString()
  requestUrl: string;
  @IsString()
  method: RequestMethod;
  @IsObject()
  response: ResType;
  @IsNumber()
  status?: number;
  @IsString()
  statusText?: string;

  /******
   * _*type: string*_\
   * Response time in millisecond
   *****/
  @IsString()
  responseTime: string;

  /******
   * _*type: number*_\
   * Response time in millisecond
   *****/
  @IsNumber()
  responseDelay: number;
}
