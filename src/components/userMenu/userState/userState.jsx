import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/selectors';
import { operations } from 'redux/auth/operations';
import { Box, Button } from '@mui/material';

export const UserState = () => {
  const dispatch = useDispatch();
  const user = useSelector(authSelectors.getUser);
  return (
    <Box sx={{ p: 1, color: 'white' }}>
      <Box as="span" sx={{ mr: '8px' }}>
        Yours to command {user.name}
      </Box>
      <Button
        sx={{
          color: 'white',
          border: '2px dotted grey',
        }}
        type="button"
        onClick={() => dispatch(operations.logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};
