import { useAuth } from 'hooks';
import { AuthNav } from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
