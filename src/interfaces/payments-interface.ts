export interface Payment {
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
