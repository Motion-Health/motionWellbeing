// Logout.tsx
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useGetAccount } from '@/services/account/useGetAccount';
import { useLogoutAccount } from '@/services/auth/useLogoutAccount';

const Logout = () => {
  const router = useRouter();
  const { data: account } = useGetAccount();
  const logout = useLogoutAccount();

  useEffect(() => {
    if (account?.accountId) {
      logout.mutate({ accountId: account.accountId });
      router.push('/wellbeing/login');
    }
  }, [account, logout, router]);

  return <div>Logging out...</div>;
};

export default Logout;