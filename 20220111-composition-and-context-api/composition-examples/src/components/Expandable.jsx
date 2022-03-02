import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const Expandable = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { user, logout } = useContext(UserContext);

  console.log(user);

  const toggleOpen = () => setIsOpen((currOpen) => !currOpen);

  return (
    <div>
      <button onClick={toggleOpen}>{isOpen ? '🔼' : '🔽'}</button>
      {isOpen && children}
    </div>
  );
};

export default Expandable;
