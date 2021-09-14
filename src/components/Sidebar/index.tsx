import React, { useEffect, Dispatch } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
} from '@material-ui/core';
import { NavOpenProps } from '../Layout';

const Sidebar = ({ setMobileNavOpen, openMobile }: NavOpenProps) => {
  const location = useLocation();

  useEffect(() => {
    if (openMobile && setMobileNavOpen) {
      setMobileNavOpen(false);
    }
  }, [location.pathname]);

  return (
    <>
      <Hidden lgUp>
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
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor='left'
          open /* Always OPEN when it's not hidden */
          variant='persistent'
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: 'calc(100% - 64px)',
            },
          }}
        >
          <h3>Drawwer ....</h3>
        </Drawer>
      </Hidden>
    </>
  );
};

export default Sidebar;
