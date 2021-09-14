import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Outlet } from 'react-router-dom';
import { styled, makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  minHeight: '100vh',
  minWidth: 'fit-content',
  overflow: 'hidden',
  width: '100%',
  zIndex: 1,
  marginTop: 64,
}));

const Main = styled('main')(({ theme }) => ({
  display: 'flex',
  flexGrow: 1,
}));

export interface NavOpenProps {
  setMobileNavOpen: Dispatch<SetStateAction<boolean>>;
  openMobile?: boolean;
  isMobile?: boolean;
}

const Layout = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  useState(() => {
    if (window.innerWidth > 660) {
      setMobileNavOpen(true);
    }
    console.log('reredner ....');
  });

  return (
    <DashboardLayoutRoot>
      <Navbar
        setMobileNavOpen={setMobileNavOpen}
        openMobile={isMobileNavOpen}
      />
      <Main>
        <Sidebar
          setMobileNavOpen={setMobileNavOpen}
          openMobile={isMobileNavOpen}
        />
        <Outlet />
      </Main>
    </DashboardLayoutRoot>
  );
};

export default Layout;
