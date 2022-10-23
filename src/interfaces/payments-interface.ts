export interface Payments {
  id: string;
  description: string;
  expiryDate: string;
  sum: number;
  address: {
    code: string;
    street: string;
    postCode: string;
  };
  taxCode: number;
  noticeCode: number;
}
