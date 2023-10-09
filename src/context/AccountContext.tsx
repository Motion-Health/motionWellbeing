import { useRouter } from 'next/router';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

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

  const router = useRouter();
  const updateAccount = (updatedAccountData: Account) => {
    const updatedAccount = {
      ...account,
      ...updatedAccountData,
    };

    setAccount(updatedAccount);
  };
  // check current page and if contains \wellbeing and if serviceProviderName is null redirect to login page
  useEffect(() => {
    // Check the pathname once and store the results
    const isInAdditionalInfoPage = router.pathname.includes(
      '/additional-information'
    );
    const isInLoginPage = router.pathname.includes('/login');
    const isInWellbeingPage = router.pathname.includes('/wellbeing');
    const isFirstLogin = router.query.isFirstLogin === 'true';
    const isRegisterPage = router.pathname.includes('/create-account');

    // If in a wellbeing page, but not in additional info or login page, and account is not null
    if (isFirstLogin) {
      account.serviceProviderName = 'fillerValue';
    }
    if (
      isInWellbeingPage &&
      !isInAdditionalInfoPage &&
      !isInLoginPage &&
      !isFirstLogin &&
      !isRegisterPage &&
      account !== null
    ) {
      const { accountId, serviceProviderName } = account;
      // If accountId is not null and serviceProviderName is null, redirect
      if (accountId !== null && serviceProviderName === null) {
        router.push('/wellbeing/additional-information');
      }
    }
  }, [account, router]);

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
