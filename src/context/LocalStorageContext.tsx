

import React, { createContext, useContext, useState } from 'react';


type User = {
  name: string;
  phone: string;
  email: string;
};

type LocalStorageContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  isAuthenticated: boolean;
  login: (userData: User) => void;
  logout: () => void;
};

const LocalStorageContext = createContext<LocalStorageContextType | undefined>(undefined);

export const useLocalStorage = () => {
  const context = useContext(LocalStorageContext);
  if (!context) {
    throw new Error('useLocalStorage must be used within a LocalStorageProvider');
  }
  return context;
};

export const LocalStorageProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  

  const isAuthenticated = !!user;

  const login = (userData: User) => {
    localStorage.setItem('userDetails', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('userDetails');
    setUser(null);
   
    
  };

  return (
    <LocalStorageContext.Provider value={{ user, setUser, isAuthenticated, login, logout }}>
      {children}
    </LocalStorageContext.Provider>
  );
};
