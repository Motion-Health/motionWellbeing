import { Box, Drawer } from '@mui/material';
import React, { useEffect } from 'react';

import NavigationItems from './navigationItems';
type IMainProps = {
  drawerWidth: number;
  mobileOpen: Boolean;
  window?: () => Window;
};

const Navigation = (props: IMainProps) => {
  const { window, drawerWidth } = props;

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [initialLoad, setInitialLoad] = React.useState(false);

  useEffect(() => {
    handleDrawerToggle();
  }, [props.mobileOpen]);

  function handleDrawerToggle(): void {
    if (initialLoad) {
      setMobileOpen(!mobileOpen);
    } else {
      setInitialLoad(true);
    }
  }

  return (
    <Box
      className="no-print"
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
        }}
      >
        <NavigationItems />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            backgroundColor: 'transparent',
            border: 'none',
          },
        }}
        open
      >
        <NavigationItems />
      </Drawer>
    </Box>
  );
};

export default Navigation;
