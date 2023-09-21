import { createContext, ReactNode, useContext, useState } from 'react';

type AccountProviderProps = {
  children: ReactNode;
};

type AccountContextMethods = {
  account: Account;
  updateAccount: (updatedAccountData: Account) => void;
};

type Account = {
  accountId?: string | null;
  accountStatus?: 'noAccess' | 'standard' | 'group' | 'premium' | 'admin';
};

const AccountContext = createContext({} as AccountContextMethods);

export function AccountProvider({ children }: AccountProviderProps) {
  const [account, setAccount] = useState({});

  const updateAccount = (updatedAccountData: Account) => {
    const updatedAccount = {
      ...account,
      ...updatedAccountData,
    };

    setAccount(updatedAccount);
  };

  return (
    <AccountContext.Provider
      value={{
        account,
        updateAccount,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}

export function useAccountContext() {
  return useContext(AccountContext);
}
