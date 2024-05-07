import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

export function AuthContextProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({
      nome: "",
      cognome: "",
      email: "",
      ruolo: ""
  });

  const handleLogin = () => {
      setIsLogged(true);
  };

  return (
      <AuthContext.Provider value={{ isLogged, user, handleLogin }}>
          {children}
      </AuthContext.Provider>
  );
}
