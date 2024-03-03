import Bull from 'bull';
import { CreateLogDto } from 'src/log/dto/create-log.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

export type userJob = {
  name: 'user';
  data: CreateUserDto;
  opt: Omit<Bull.JobOptions, 'repeat'>;
};
export type logJob = {
  name: 'logging';
  data: CreateLogDto;
  opt: Omit<Bull.JobOptions, 'repeat'>;
};
