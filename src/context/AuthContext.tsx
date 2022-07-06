import React, { ReactNode, useState } from "react";

type AuthContextType = {
  token: string | null;
  setToken: (token: string) => void;
  revokeToken: () => void;
};

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = () => {
  let context = React.useContext(AuthContext);

  if (context === undefined) {
    throw new Error("Must use it inside AuthContextProvider");
  }
  return context;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [token, _setToken] = useState(localStorage.getItem("auth-token"));

  const setToken = (token: string) => {
    localStorage.setItem("auth-token", token);
    _setToken(token);
  };

  const revokeToken = () => {
    localStorage.removeItem("auth-token");
    _setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, setToken, revokeToken }}>
      {children}
    </AuthContext.Provider>
  );
};
