import { Box } from '@mui/material';
import { Navigation } from 'components/Navigation';
import { UserAuth } from 'components/UserMenu/UserAuth/userAuth';
import { UserState } from 'components/UserMenu/UserState/userState';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/selectors';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Box
      as="header"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '2px dotted grey',
      }}
    >
      <Suspense fallback={<p> Loading</p>}>
        <Navigation />

        {isLoggedIn ? <UserState /> : <UserAuth />}

        <Outlet />
      </Suspense>
    </Box>
  );
};
