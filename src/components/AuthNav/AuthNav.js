import { NavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';

export const AuthNav = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <Button
          LinkComponent={NavLink}
          variant="outlined"
          to="/regisration"
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          Register
        </Button>
        <Button
          LinkComponent={NavLink}
          variant="outlined"
          to="/login"
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          Log In
        </Button>
      </Box>
    </div>
  );
};
