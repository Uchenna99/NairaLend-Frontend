
export interface LoginResponse {
    accessToken: string;
}


export interface AddBankAccount {
  bankName: string;
  accountNumber: string;
  accountType: string;
}

export interface DB_BankAccount {
  id: string;
  bankName: string;
  accountNumber: string;
  accountType: string;
}