import { createContext, ReactNode, useContext, useState } from "react";

type appContextType = {
  user: boolean;
  login: () => void;
  logout: () => void;
};

const appContextDefaultValues: appContextType = {
  user: false,
  login: () => {},
  logout: () => {},
};

const AppContext = createContext<appContextType>(appContextDefaultValues);

export const useApp = () => {
  return useContext(AppContext);
};

type appProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: appProviderProps) => {
  const [user, setUser] = useState<boolean>(false);

  const login = () => {
    setUser(true);
  };

  const logout = () => {
    setUser(false);
  };

  const value = {
    user,
    login,
    logout,
  };

  return (
    <>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </>
  );
};

export default AppProvider;
