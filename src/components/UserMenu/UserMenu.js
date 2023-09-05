import { useDispatch } from 'react-redux';

import { useAuth } from 'hooks';

import { logOut } from 'components/redux/auth/operations';
import { Box, Button, Typography } from '@mui/material';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
        }}
      >
        <Typography sx={{ mr: 2 }}>Welcome, {user?.name}</Typography>
        <Button
          to="/login"
          sx={[
            {
              '&:hover': {
                color: 'red',
                backgroundColor: 'white',
              },
            },
            { my: 2, color: 'white', display: 'block' },
          ]}
          onClick={() => dispatch(logOut())}
        >
          Logout
        </Button>
      </Box>
    </>
  );
};

export default UserMenu;
