import React, { useState, Dispatch, SetStateAction } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
  width: '100%',
  paddingTop: 100,
}));

export interface NavOpenProps {
  setMobileNavOpen: Dispatch<SetStateAction<boolean>>;
  openMobile?: boolean;
}

const Layout = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <DashboardLayoutRoot>
      <Navbar setMobileNavOpen={setMobileNavOpen} />
      <Sidebar
        setMobileNavOpen={setMobileNavOpen}
        openMobile={isMobileNavOpen}
      />
      <Outlet />
    </DashboardLayoutRoot>
  );
};

export default Layout;
