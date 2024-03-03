import { Schema } from 'mongoose';
import { UserTitle } from '../enums/user.enum';

export type nameType = {
  title: UserTitle;
  first: string;
  last: string;
};

export type locationType = {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: string;
  coordinates: {
    latitude: number | string;
    longitude: number | string;
  };
  timezone: {
    offset: string;
    description: string;
  };
};

export type loginType = {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
};

export type dobType = {
  date: string;
  age: number;
};
