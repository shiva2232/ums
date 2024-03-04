import { CreateUserDto } from 'src/user/dto/create-user.dto';

export type RequestMethod =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'PATCH'
  | 'ALL'
  | 'OPTIONS'
  | 'HEAD'
  | 'SEARCH';

export type ResType = {
  results: CreateUserDto[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
};
