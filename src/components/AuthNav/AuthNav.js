import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/regisration">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
};
