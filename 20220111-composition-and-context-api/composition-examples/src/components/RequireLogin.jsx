import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import Login from './Login';

const RequireLogin = ({ children }) => {
  const { isLoggedIn } = useContext(UserContext);

  return isLoggedIn ? children : <Login />;
};

export default RequireLogin;
