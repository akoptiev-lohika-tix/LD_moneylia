import { Contribution } from './contribution-interface';

export interface User {
  name: string;
  status: string;
  birthday: string;
  city: string;
  country: string;
  currency: string;
  contributions: Contribution[];
}

export interface TransformedUser extends User {
  id: string;
}
