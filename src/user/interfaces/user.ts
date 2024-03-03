export type Gender = 'male' | 'female' | 'other';

export interface NameType {
  title: string;
  first: string;
  last: string;
}

export interface LocationType {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
}

export interface LoginType {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface DobType {
  date: string;
  age: number;
}

export interface RegisteredType {
  date: string;
  age: number;
}

export interface IdType {
  name: string;
  value: string;
}

export interface PictureType {
  large: string;
  medium: string;
  thumbnail: string;
}
