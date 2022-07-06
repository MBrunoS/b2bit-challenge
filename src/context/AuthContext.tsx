import React, { ReactNode, useState } from "react";

type AuthContextType = {
  token: string | null;
  setToken: (token: string) => void;
  tokenRefresh: string | null;
  setTokenRefresh: (token: string) => void;
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
  const [tokenRefresh, _setTokenRefresh] = useState(
    localStorage.getItem("auth-token-refresh")
  );

  const setToken = (token: string) => {
    localStorage.setItem("auth-token", token);
    _setToken(token);
  };

  const setTokenRefresh = (token: string) => {
    localStorage.setItem("auth-token-refresh", token);
    _setTokenRefresh(token);
  };

  const revokeToken = () => {
    localStorage.removeItem("auth-token");
    localStorage.removeItem("auth-token-refresh");
    _setToken(null);
    _setTokenRefresh(null);
  };

  return (
    <AuthContext.Provider
      value={{ token, setToken, tokenRefresh, setTokenRefresh, revokeToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
