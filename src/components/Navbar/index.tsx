import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
} from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import { Link as RouterLink } from 'react-router-dom';
import { NavOpenProps } from '../Layout';

export interface OpenProps {
  open: boolean;
}

const Navbar = ({ setMobileNavOpen, ...rest }: NavOpenProps) => {
  return (
    <AppBar elevation={0} {...rest}>
      <Toolbar>
        <RouterLink to='/'>Repairphone</RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <Hidden lgDown>
          <IconButton color='inherit' size='large'>
            <Badge badgeContent={0} color='primary' variant='dot'>
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color='inherit' size='large'>
            <InputIcon />
          </IconButton>
          <h5>link menu</h5>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color='inherit'
            onClick={() => setMobileNavOpen(true)}
            size='large'
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
