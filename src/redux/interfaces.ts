export interface AccountSetUp {
  submitting: boolean;
}

export interface Action {
  type: string;
  payload?: any;
}

export interface Store {
  accountSetUp: AccountSetUp
}
