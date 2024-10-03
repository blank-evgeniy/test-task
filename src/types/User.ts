export interface User {
  id: number;
  image: string;
  name: string;
  username: string;
  mail: string;
  phone: string;
  company: string;
  city: string;
  archived?: boolean;
  hidden?: boolean;
}

export interface UsersSchema {
  users: User[];
  loading: boolean;
  error?: string;
}

//данные приходящие с сервера

interface AddressData {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

interface CompanyData {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressData;
  phone: string;
  website: string;
  company: CompanyData;
}
