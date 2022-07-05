import React, { ReactNode, useState } from "react";

const [token, setToken] = useState(localStorage.getItem("auth-token"));

export const AuthContext = React.createContext({ token, setToken });

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
