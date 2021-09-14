import React from 'react';
import { styled, makeStyles } from '@material-ui/core/styles';

const WrapPage = styled('div')(({ theme }) => ({
  display: 'flex',
  padding: 24,
  flexGrow: 1,
  flexBasis: 0,
  paddingTop: 8,
  flexDirection: 'column',
}));

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return <WrapPage>{children}</WrapPage>;
};

export default PageContainer;
