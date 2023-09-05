import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Button
        LinkComponent={NavLink}
        to="/"
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        Home
      </Button>
      {/* <NavLink to="/">Home</NavLink> */}
      {
        isLoggedIn && (
          <Button
            LinkComponent={NavLink}
            to="/contacts"
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            Contacts
          </Button>
        )
        // <NavLink to="/contacts">Contacts</NavLink>
      }
    </>
  );
};

export default Navigation;
