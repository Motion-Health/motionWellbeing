import React, { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router'

import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';

import Navigation from '@/components/navigation/index';
import { appSections } from '@/components/navigation/navigationItems';
import { useAccountContext } from '@/context/AccountContext'
import { useGetAccount } from '@/services/account/useGetAccount'

type IMainProps = {
  children: ReactNode;
};

const drawerWidth = 240;

const Main = (props: IMainProps) => {
  const { children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { account, updateAccount } = useAccountContext()

  const {
    data: getAccountResponse, 
    refetch: refetchAccountData 
  } = useGetAccount()
  
  useEffect(() => {
    if (!getAccountResponse) {
      refetchAccountData()
    }

    if (!account?.accountStatus && getAccountResponse) {
      const newAccountData = getAccountResponse
      updateAccount(newAccountData)
    }
  }, [account, getAccountResponse])

  const router = useRouter()
  const { accountStatus } = account

  useEffect(() => {
    const navigatedSection = appSections.find((section) => router.route.startsWith(section.path))

    const navigationIsAllowed = 
      accountStatus && 
      navigatedSection && 
      navigatedSection?.accessibleBy.includes(accountStatus)

    if (accountStatus && navigatedSection && !navigationIsAllowed) {
      router.push('/wellbeing/upgrade')
    }
  }, [router])

  function handleDrawerToggle(): void {
    setMobileOpen(!mobileOpen);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: 'transparent',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Navigation mobileOpen={mobileOpen} drawerWidth={drawerWidth} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 6,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export { Main };
