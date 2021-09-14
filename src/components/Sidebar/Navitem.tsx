import { Button, ListItem } from '@material-ui/core';
import React from 'react';
import {
  matchPath,
  NavLink as RouterLink,
  useLocation,
} from 'react-router-dom';
import { NavOpenProps } from '../Layout';

interface ItemProps extends NavOpenProps {
  href: string;
  icon: any;
  title: string;
}

const NavItem = ({
  setMobileNavOpen,
  href,
  icon: Icon,
  title,
  isMobile,
  ...rest
}: ItemProps) => {
  const location = useLocation();

  const active = href
    ? !!matchPath(
        {
          path: href,
          end: false,
        },
        location.pathname
      )
    : false;

  return (
    <ListItem
      onClick={() => isMobile && setMobileNavOpen(false)}
      disableGutters
      sx={{
        display: 'flex',
        py: 0,
      }}
      {...rest}
    >
      <Button
        component={RouterLink}
        sx={{
          color: 'text.secondary',
          fontWeight: 'medium',
          justifyContent: 'flex-start',
          letterSpacing: 0,
          py: 1.25,
          textTransform: 'none',
          width: '100%',
          ...(active && {
            color: 'primary.main',
          }),
          '& svg': {
            mr: 1,
          },
        }}
        to={href}
      >
        {Icon && <Icon size='20' />}
        <span>{title}</span>
      </Button>
    </ListItem>
  );
};

export default NavItem;
