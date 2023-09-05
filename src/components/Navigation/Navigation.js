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
        Home
      </Button>
      {isLoggedIn && (
        <Button
          LinkComponent={NavLink}
          to="/contacts"
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
          Contacts
        </Button>
      )}
    </>
  );
};

export default Navigation;
