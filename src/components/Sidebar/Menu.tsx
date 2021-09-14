import {
  Box,
  Button,
  Divider,
  List,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import {
  AccountBalance,
  Dashboard,
  ExitToApp,
  Login,
  Logout,
} from '@material-ui/icons';
import React from 'react';
import NavItem from './Navitem';
import { NavOpenProps } from '../Layout';

const items = [
  {
    href: '/app/dashboard',
    icon: Dashboard,
    title: 'Dashboard',
  },
  //   {
  //     href: '/app/customers',
  //     icon: UsersIcon,
  //     title: 'Customers',
  //   },
  //   {
  //     href: '/app/products',
  //     icon: ShoppingBagIcon,
  //     title: 'Products',
  //   },
  {
    href: '/app/account',
    icon: AccountBalance,
    title: 'Account',
  },
  //   {
  //     href: '/app/settings',
  //     icon: SettingsIcon,
  //     title: 'Settings',
  //   },
  {
    href: '/login',
    icon: Login,
    title: 'Login',
  },
  {
    href: '/register',
    icon: Logout,
    title: 'Register',
  },
  {
    href: '/404',
    icon: ExitToApp,
    title: 'Error',
  },
];

const Menu = ({ setMobileNavOpen, openMobile }: NavOpenProps) => {
  const matches = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
              setMobileNavOpen={setMobileNavOpen}
              isMobile={matches}
            />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box>
        <Typography
          align='center'
          gutterBottom
          sx={{
            backgroundColor: 'background.default',
            m: (openMobile && 2) || 0,
            p: (openMobile && 2) || 0,
            fontSize: (openMobile && '16px') || 0,
          }}
        >
          BookAble24.de
        </Typography>
      </Box>
    </Box>
  );
};

export default Menu;
