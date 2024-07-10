import React, { createContext, useState, useEffect } from 'react';

const LoggedInContext = createContext();

const LoggedInProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      setUsername(savedUsername);
      setIsLoggedIn(true);
    }
  }, []);

  const login = (username) => {
    setUsername(username);
    setIsLoggedIn(true);
    localStorage.setItem('username', username);
  };

  return (
    <LoggedInContext.Provider value={{ isLoggedIn, username, login }}>
      {children}
    </LoggedInContext.Provider>
  );
};

export { LoggedInContext, LoggedInProvider };
