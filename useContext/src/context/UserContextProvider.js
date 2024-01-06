import React, { useState } from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [abc, setabc] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser, abc, setabc }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
