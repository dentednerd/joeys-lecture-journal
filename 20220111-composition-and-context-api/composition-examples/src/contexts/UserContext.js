import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState({});

  const logout = () => {
    setUser({});
  }

  const isLoggedIn = !!user.username;

  return (
    <UserContext.Provider value={{ user, setUser, logout, isLoggedIn }}>
      {props.children}
    </UserContext.Provider>
  );
}
