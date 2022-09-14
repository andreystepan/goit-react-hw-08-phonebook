import { NavLink } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Box as="nav" display="flex">
      {isLoggedIn && (
        <NavLink to="/contacts">
          <Typography
            sx={{
              p: 2,
              display: 'block',
              color: 'green',
            }}
          >
            Contacts
          </Typography>
        </NavLink>
      )}
    </Box>
  );
};
