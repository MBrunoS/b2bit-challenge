import React, { ReactNode } from "react";

type AuthContextType = {
  token: string | null;
  setToken: (token: string) => void;
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
  // const token = localStorage.getItem("auth-token");
  const token = "";

  const setToken = (token: string) => {
    localStorage.setItem("auth-token", token);
  };

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
