import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button
        type="button"
        //   onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
