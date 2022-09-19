import { NavLink } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

export const UserAuth = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <NavLink to="/Register">
        <Typography
          sx={{
            p: 2,
            color: 'white',
          }}
        >
          Register
        </Typography>
      </NavLink>
      <NavLink to="/login">
        <Typography
          sx={{
            p: 2,
            color: 'white',
          }}
        >
          Login
        </Typography>
      </NavLink>
    </Box>
  );
};
