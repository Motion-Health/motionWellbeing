import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { useGetAccount } from '@/services/account/useGetAccount';
import { useLogoutAccount } from '@/services/auth/useLogoutAccount';
import theme from '@/styles/theme';
import { AppConfig } from '@/utils/AppConfig';

import styles from './Navigation.module.css';

const defaultColour = theme.palette.text.primary;
const activeColour = theme.palette.secondary.main;

const NavigationItems = () => {
  const router = useRouter();
  const {
    pathname,
    query: { filter: activityFilter },
  } = router;

  const [showActivitiesSubNavigation, setShowActivitiesSubNavigation] =
    useState(false);

  const { data: account } = useGetAccount();
  useEffect(() => {
    if (pathname === '/wellbeing/activities') {
      setShowActivitiesSubNavigation(true);
    } else {
      setShowActivitiesSubNavigation(false);
    }
  }, [pathname]);

  const logout = useLogoutAccount();

  const logoutAccount = () => {
    logout.mutate({ accountId: account.accountId! });

    router.push('/wellbeing/login');
  };

  const renderLogo = () => {
    const logoSrc =
      account?.logo && account?.accountStatus !== 'standard'
        ? account?.logo
        : AppConfig.logo;

    return (
      <img
        className={styles.renderLogo}
        src={logoSrc}
        width="144"
        height="95"
        alt="logo"
      />
    );
  };

  return (
    <div className={styles.drawer}>
      <div className={styles.logo}>{renderLogo()}</div>
      <Grid
        container
        className={styles.navigationContainer}
        direction="column"
        sx={{
          flexDirection: 'column',
          flexWrap: 'nowrap',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <List sx={{ paddingTop: 0 }} className={styles.appSections}>
          {appSections.map((page) => {
            if (
              account?.accountStatus &&
              page.visibleTo.includes(account.accountStatus)
            ) {
              return (
                <ListItem
                  className={styles.navigationLink}
                  key={page.title}
                  onClick={() => router.push(page.path)}
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <img
                        src={page.icon}
                        alt="icon"
                        height="24"
                        width="24"
                        style={{
                          filter:
                            pathname === page.path
                              ? // transform to activeColour (#66d3fa)
                                'invert(72%) sepia(92%) saturate(573%) hue-rotate(166deg) brightness(99%) contrast(99%)'
                              : 'none',
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={page.title}
                      sx={{
                        color:
                          pathname === page.path ? activeColour : defaultColour,
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            }
          })}
        </List>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          {account?.accountStatus != 'admin' &&
            account?.accountStatus != 'gis' &&
            account?.accountStatus != 'premium' && (
              <Button
                variant="outlined"
                sx={{
                  width: '12rem',
                  marginTop: '3rem',
                  marginBottom: '2rem',
                }}
                onClick={() => router.push('/wellbeing/upgrade')}
                className="upgrade-button"
              >
                Upgrade
              </Button>
            )}

          {account?.accountStatus !== 'admin' &&
            account?.accountStatus !== 'gis' &&
            account?.accountStatus === 'premium' && (
              <div className="manage-membership-container">
                <p className="premium-text">Premium</p>
                <Button
                  variant="outlined"
                  sx={{
                    width: '12rem',
                  }}
                  onClick={() => router.push('/wellbeing/upgrade')}
                  className="upgrade-button"
                >
                  Manage Membership
                </Button>
              </div>
            )}

          {account?.accountStatus != 'admin' && (
            <Button
              variant="text"
              sx={{
                marginBottom: '2rem',
              }}
              href="/wellbeing/support"
            >
              Get support
            </Button>
          )}
          <Button
            onClick={logoutAccount}
            underline="none"
            sx={{
              cursor: 'pointer',
              marginBottom: '2.5rem',
            }}
          >
            Log out
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export const appSections = [
  {
    title: 'Home',
    icon: '/assets/icons/ph_house.svg',
    path: '/wellbeing/dashboard',
    visibleTo: ['standard', 'group', 'premium', 'admin', 'gis'],
    accessibleBy: ['standard', 'group', 'premium', 'admin', 'gis'],
  },
  {
    title: 'Activities',
    icon: '/assets/icons/ph_person-hands-up.svg',
    path: '/wellbeing/activities',
    visibleTo: ['standard', 'group', 'premium', 'admin', 'gis'],
    accessibleBy: ['standard', 'group', 'premium', 'admin', 'gis'],
  },
  {
    title: 'Golf In Society Activities',
    icon: '/assets/icons/ph_person-hands-up.svg',
    path: '/wellbeing/activities/?filter=gis',
    visibleTo: ['gis'],
    accessibleBy: ['gis'],
  },

  {
    title: 'My planner',
    icon: '/assets/icons/ph_calendar-blank.svg',
    path: '/wellbeing/planner',
    visibleTo: ['standard', 'group', 'premium', 'admin'],
    accessibleBy: ['group', 'premium', 'admin'],
  },
  {
    title: 'Community',
    icon: '/assets/icons/community.svg',
    path: '/wellbeing/community',
    visibleTo: ['standard', 'group', 'premium', 'admin'],
    accessibleBy: ['standard', 'group', 'premium', 'admin'],
  },
  {
    title: 'My profile',
    icon: '/assets/icons/ph_user-circle.svg',
    path: '/wellbeing/profile',
    visibleTo: ['standard', 'group', 'premium', 'admin'],
    accessibleBy: ['standard', 'group', 'premium', 'admin'],
  },

  {
    title: 'Announcements',
    icon: '/assets/icons/ph_hand-waving.svg',
    path: '/wellbeing/announcements',
    visibleTo: ['admin'],
    accessibleBy: ['admin'],
  },
  {
    title: 'Analytics',
    icon: '/assets/icons/ph_chart-pie.svg',
    path: '/wellbeing/analytics',
    visibleTo: ['admin'],
    accessibleBy: ['admin'],
  },
];

export default NavigationItems;
