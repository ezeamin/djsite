import React, { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const init = window.location.href.includes("/login") ? false : true;

  const [auth, setAuth] = useState(init);

  React.useEffect(() => {
    if (localStorage.getItem("isLogged") === null || localStorage.getItem("isLogged") === "false") {
      setAuth(false);
    }
    else {
      setAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
