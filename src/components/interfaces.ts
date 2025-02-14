export const hostURL = 'https://nairalender.up.railway.app';

export interface LoginResponse {
  accessToken: string;
}


export interface AddBankAccount {
  bankName: string;
  accountNumber: string;
  accountType: string;
  userId: string;
}


export interface AddPaymentCard {
  cardName: string;
  cardNumber: string;
  issuingBank: string;
  expiry: string;
  userId: string;
}

export interface DB_BankAccount {
  id: string;
  userId: string;
  bankName: string;
  accountNumber: string;
  accountType: string;
  image: string;
}


export interface JWT {
  iat: number;
  id: string;
  name: string;
  role: 'USER'|'ADMIN';
}


export interface Bank {
  id: number;
  name: string;
  image: string;
}


export interface DB_PaymentCard {
  id: string;
  cardName: string;
  cardNumber: string;
  issuingBank: string;
  expiry: string;
  userId: string;
}