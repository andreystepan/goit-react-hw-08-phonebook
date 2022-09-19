import { AppBar } from 'components/AppBar/AppBar';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <Box display="grid" gridTemplateRows="60px 1fr">
      <AppBar />
      <Suspense fallback={<p> Loading</p>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
