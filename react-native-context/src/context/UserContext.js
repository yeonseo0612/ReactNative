import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // 초기 상태: 로그인 안됨

  const login = () => {
    setUser({ name: 'John Doe' });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );


{/*
    export const UserProvider = ({children}) => {
        
        const [user,setUser] = useState(null);\

        const login = () => {
            
                setUser({name : "John Doe"});
        }

        const logout = () => {
                setUser(null)
                
        }
        
        
        return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
             ) ;
    
    
    
    
    */}
};

