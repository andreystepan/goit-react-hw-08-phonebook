import { Box } from '@mui/material';
import { Navigation } from 'components/Navigation/Navigation';
import { UserAuth } from 'components/UserMenu/UserAuth/userAuth';
import { UserState } from 'components/UserMenu/UserState/userState';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/selectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Box
      as="header"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#3f51b5',
        boxShadow: 3,
      }}
    >
      <Navigation />

      {isLoggedIn ? <UserState /> : <UserAuth />}
    </Box>
  );
};
