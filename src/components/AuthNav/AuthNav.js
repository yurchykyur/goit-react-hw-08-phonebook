import { NavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';

const AuthNav = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <Button
          LinkComponent={NavLink}
          variant="outlined"
          to="/regisration"
          sx={[
            {
              '&:hover': {
                color: 'red',
                backgroundColor: 'white',
              },
            },
            { my: 2, color: 'white', display: 'block' },
          ]}
        >
          Register
        </Button>
        <Button
          LinkComponent={NavLink}
          variant="outlined"
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
        >
          Log In
        </Button>
      </Box>
    </div>
  );
};

export { AuthNav };
