import { Box, Button, Divider, List, Typography } from '@material-ui/core';
import {
  AccountBalance,
  Dashboard,
  ExitToApp,
  Login,
  Logout,
} from '@material-ui/icons';
import React from 'react';
import NavItem from './Navitem';
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

const Menu = () => {
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
            />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box
        sx={{
          backgroundColor: 'background.default',
          m: 2,
          p: 2,
        }}
      >
        <Typography align='center' gutterBottom variant='h5'>
          BookAble24.de
        </Typography>
      </Box>
    </Box>
  );
};

export default Menu;
