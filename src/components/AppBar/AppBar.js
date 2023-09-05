import { useAuth } from 'hooks';
import { AuthNav } from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function ButtonAppBar() {
  const { isLoggedIn } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container fixed>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component={RouterLink}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'flex' },
                flexGrow: 1,
                fontFamily: 'Roboto',
                fontWeight: 700,
                letterSpacing: '.15rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              PHONEBOOK
            </Typography>

            <Box sx={{ flexGrow: 6, display: { xs: 'none', md: 'flex' } }}>
              <Navigation />
            </Box>

            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar;
