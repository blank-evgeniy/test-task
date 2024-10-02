export interface User {
  id: string;
  image: string;
  username: string;
  company: string;
  city: string;
  archived?: boolean;
  hidden?: boolean;
}
