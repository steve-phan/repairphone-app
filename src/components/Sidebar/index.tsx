import React from 'react';
import { Drawer, Hidden, DrawerProps } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { NavOpenProps } from '../Layout';
import Menu from './Menu';

interface DesktopDrawerProps extends DrawerProps {
  openmobile?: boolean;
  test?: string;
}

const DesktopDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'openmobile',
})<DesktopDrawerProps>(({ theme, openmobile, test, ...rest }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    transition: 'width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
    overflowX: 'hidden',
    width: openmobile ? '256px' : '55px',
    [theme.breakpoints.up('sm')]: {
      zIndex: 'auto',
    },
  },
}));

const Sidebar = ({ setMobileNavOpen, openMobile }: NavOpenProps) => {
  return (
    <>
      <Hidden smUp>
        <Drawer
          anchor='left'
          /* Closed "backdropClick" | "escapeKeyDown" */
          onClose={() => setMobileNavOpen(false)}
          open={openMobile}
          variant='temporary'
          PaperProps={{
            sx: {
              width: 256,
            },
          }}
        >
          <h3>Drawer</h3>
          <Menu openMobile={openMobile} setMobileNavOpen={setMobileNavOpen} />
        </Drawer>
      </Hidden>
      <Hidden smDown>
        <DesktopDrawer
          openmobile={openMobile}
          test='test'
          anchor='left'
          open /* Always OPEN when it's not hidden */
          variant='persistent'
          PaperProps={{
            sx: {
              // width: openMobile ? 256 : 55,
              height: 'calc(100% - 64px)',
            },
          }}
        >
          {' '}
          <Menu openMobile={openMobile} setMobileNavOpen={setMobileNavOpen} />
        </DesktopDrawer>
      </Hidden>
    </>
  );
};

export default Sidebar;
